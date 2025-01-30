// src/App.js

import React, { useState, useEffect } from 'react';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import { fetchQuizData } from './api';

const App = () => {
  const [step, setStep] = useState('start');
  const [score, setScore] = useState(0);
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getQuizData = async () => {
      const data = await fetchQuizData();
      if (data) {
        setQuizData(data);
      } else {
        setError('Failed to load quiz data. Please try again later.');
      }
      setLoading(false);
    };

    getQuizData();
  }, []);

  const handleStart = () => setStep('quiz');
  const handleFinish = (finalScore) => {
    setScore(finalScore);
    setStep('result');
  };
  const handleRestart = () => {
    setScore(0);
    setStep('start');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p>Loading quiz data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {step === 'start' && <StartScreen onStart={handleStart} />}
      {step === 'quiz' && <QuizScreen data={quizData} onFinish={handleFinish} />}
      {step === 'result' && <ResultScreen score={score} totalQuestions={quizData.length} onRestart={handleRestart} />}
    </div>
  );
};

export default App;
