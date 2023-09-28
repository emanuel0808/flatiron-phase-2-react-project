import React from 'react';

function MealItem({ meal }) {
  return (
    <div className="meal-item">
      <img src={meal.image} alt={`${meal.name} Image`} />
      <div className="meal-details">
        <h3>{meal.name}</h3>
        <p>Type: {meal.type}</p>
        <p>Calories: {meal.calories}</p>
      </div>
    </div>
  );
}

export default MealItem;
