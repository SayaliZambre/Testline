// src/components/ResultScreen.js

import React from 'react';

const ResultScreen = ({ score, totalQuestions, onRestart }) => {
  const percentage = (score / totalQuestions) * 100;

  let feedback = '';
  if (percentage >= 80) {
    feedback = 'Excellent!';
  } else if (percentage >= 50) {
    feedback = 'Good Job!';
  } else {
    feedback = 'Better luck next time!';
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
      <h1 className="text-4xl font-extrabold mb-6">Quiz Finished!</h1>
      <p className="text-2xl mb-4">You scored: {score} / {totalQuestions}</p>
      <p className="text-xl mb-6">{feedback}</p>
      <button
        onClick={onRestart}
        className="px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition-all duration-300"
      >
        Try Again
      </button>
    </div>
  );
};

export default ResultScreen;
