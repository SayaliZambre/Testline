// src/components/StartScreen.js

import React from 'react';

const StartScreen = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500 text-white p-4 transition-all duration-500">
      <h1 className="text-4xl font-extrabold mb-6 animate__animated animate__fadeIn">Welcome to the Quiz!</h1>
      <p className="text-xl mb-8 animate__animated animate__fadeIn">Test your knowledge and earn points!</p>
      <button
        onClick={onStart}
        className="px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition-all duration-300"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default StartScreen;
