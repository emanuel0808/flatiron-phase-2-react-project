import React, { useState } from 'react';
import './App.css'; 

const MealCard = ({ day, image, meals, smallSize }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={`meal-card ${smallSize ? 'small-size' : ''}`}>
      <img src={image} alt={`Meal for ${day}`} onClick={toggleDetails} />
      <h3>{day}</h3>
      <p>Click the image to display meals for the day</p> {/* Description */}
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

