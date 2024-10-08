import React from 'react';

const Projects = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-neutral-950 text-neutral-300 border-b border-neutral-900 pb-4 lg:mb-35">
      <h2 className="text-4xl font-bold mb-6">Projects</h2>
      <div className="flex flex-col items-center mb-10">
        <img src='../assets/projects/todoapp.jpeg' alt="To Do List App" className="mb-4 w-64 h-64 object-cover" />
        <h3 className="text-2xl font-semibold">To Do List</h3>
        <p className="mt-2 max-w-lg text-center">
          A simple, user-friendly to-do list app to help manage daily tasks with features like adding, editing, and deleting tasks, built with React and Node.js.
        </p>
      </div>

      <div className="flex flex-col items-center mb-10">
        <img src="../assets/projects/famtrack.jpeg" alt="Family Vacation Tracker" className="mb-4 w-64 h-64 object-cover" />
        <h3 className="text-2xl font-semibold">Family Vacation Tracker</h3>
        <p className="mt-2 max-w-lg text-center">
          A web app to track and plan family vacations, allowing users to store travel dates, destinations, and budgets. Built with the PERN stack (PostgreSQL, Express, React, Node.js).
        </p>
      </div>

      <div className="flex flex-col items-center mb-10">
        <img src="../assets/projects/dino.jpg" alt="Hand Gesture Controlled Dino Game" className="mb-4 w-64 h-64 object-cover" />
        <h3 className="text-2xl font-semibold">Hand Gesture Controlled Chrome Dino Game</h3>
        <p className="mt-2 max-w-lg text-center">
          A fun project where the Chrome Dino game is controlled using hand gestures, leveraging OpenCV and TensorFlow for gesture recognition.
        </p>
      </div>

      <div className="flex flex-col items-center mb-10">
        <img src="../assets/projects/nlp.png" alt="Sentiment Analysis" className="mb-4 w-64 h-64 object-cover" />
        <h3 className="text-2xl font-semibold">Sentiment Analysis of Restaurant Reviews</h3>
        <p className="mt-2 max-w-lg text-center">
          Using natural language processing (NLP) techniques, this project analyzes restaurant reviews to determine customer sentiment. Built with Python, scikit-learn, and NLTK.
        </p>
      </div>

      <div className="flex flex-col items-center mb-10">
        <img src="../assets/projects/apriori.png" alt="Apriori Model for Supermarket" className="mb-4 w-64 h-64 object-cover" />
        <h3 className="text-2xl font-semibold">Apriori Model for Supermarket</h3>
        <p className="mt-2 max-w-lg text-center">
          This project uses the Apriori algorithm to analyze supermarket transaction data and identify frequent itemsets, built with Python, pandas, and matplotlib.
        </p>
      </div>
    </div>
  );
};

export default Projects;
