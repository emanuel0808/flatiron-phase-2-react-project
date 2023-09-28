// Main.js
import React, { useState, useEffect } from 'react';

function Main() {
  const [mealPlan, setMealPlan] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/mealPlan/week') // Updated endpoint
      .then((response) => response.json())
      .then((data) => setMealPlan(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Meal Plan for the Week</h1>
      <ul>
        {mealPlan.map((day) => (
          <li key={day.day}>
            <h2>{day.day}</h2>
            <p>Breakfast: {day.breakfast}</p>
            <p>Lunch: {day.lunch}</p>
            <p>Dinner: {day.dinner}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
