import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weekly Meal Planner</h1>
      </header>
      <main>
        <section className="content">
          <div className="day-card">
            <h2>Monday</h2>
            <p>Breakfast: Oatmeal</p>
            <p>Lunch: Sandwich</p>
            <p>Dinner: Pasta</p>
          </div>
          <div className="day-card">
            <h2>Tuesday</h2>
            <p>Breakfast: Pancakes</p>
            <p>Lunch: Salad</p>
            <p>Dinner: Stir Fry</p>
          </div>
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Weekly Meal Planner</p>
      </footer>
    </div>
  );
}

export default App;
