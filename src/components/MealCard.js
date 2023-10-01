// MealCard.js
import React, { useState } from 'react';
import './App.css'; // Import your CSS file

const MealCard = ({ day, image, meals }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="meal-card"> {/* Apply the "meal-card" class */}
      <img src={image} alt={`Meal for ${day}`} onClick={toggleDetails} />
      <h3>{day}</h3>
      {showDetails && (
        <div className="meal-details">
          {meals.map((meal, index) => (
            <div key={index}>
              <p>Name: {meal.name}</p>
              <p>Type: {meal.type}</p>
              <p>Calories: {meal.calories}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MealCard;
