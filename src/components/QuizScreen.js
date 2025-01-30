// src/components/QuizScreen.js

import React, { useState, useEffect } from 'react';

const QuizScreen = ({ data, onFinish }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30); // 30 seconds per question
  const [timerActive, setTimerActive] = useState(true);

  const currentQuestion = data[currentQuestionIndex];

  useEffect(() => {
    if (timerActive && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval); // Clean up interval on unmount
    }
    // If timer runs out, move to next question
    if (timer === 0) {
      handleNextQuestion();
    }
  }, [timer, timerActive]);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === currentQuestion.correct_answer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);
    setTimer(30); // Reset timer for next question
    setTimerActive(true);

    if (currentQuestionIndex < data.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onFinish(score); // Finish quiz when all questions are answered
    }
  };

  const progress = ((currentQuestionIndex + 1) / data.length) * 100;

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg w-3/4 max-w-lg animate__animated animate__fadeIn">
      <h2 className="text-2xl font-bold mb-4">Question {currentQuestionIndex + 1}</h2>
      <p className="text-xl mb-4">{currentQuestion.question}</p>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-lg mb-4">
        <div
          className="h-2 bg-blue-500 rounded-lg"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Timer */}
      <div className="mb-4">
        <p className="text-lg font-semibold">Time Left: {timer}s</p>
      </div>

      <div className="w-full mb-4">
        {currentQuestion.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelection(answer)}
            className={`w-full p-2 mb-2 border rounded-lg ${
              selectedAnswer === answer
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            } transition-all duration-300`}
          >
            {answer}
          </button>
        ))}
      </div>

      <button
        onClick={handleNextQuestion}
        className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-300"
        disabled={!selectedAnswer}
      >
        Next Question
      </button>
    </div>
  );
};

export default QuizScreen;
