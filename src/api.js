// src/api.js

export const fetchQuizData = async () => {
    try {
      const response = await fetch('https://api.jsonserve.com/Uw5CrX');
      const data = await response.json();
  
      // Ensure that data is returned successfully
      if (response.ok) {
        return data; // Return the fetched data
      } else {
        throw new Error('Failed to fetch quiz data.');
      }
    } catch (error) {
      console.error('Error fetching quiz data:', error);
      return null; // Return null if there is an error
    }
  };
  