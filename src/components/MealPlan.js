import React from 'react';

const MealPlan = ({ mealPlanData }) => {
  
  const data = mealPlanData || [];

  return (
    <div className="meal-plan">
      {data.map((day) => (
        <div key={day.day} className="meal-day">
          <h2>{day.day}</h2>
          <img src={day.image} alt={`Meal plan for ${day.day}`} />
          <ul>
            {day.meals.map((meal, index) => (
              <li key={index}>
                <span>{meal.name}</span>
                <span>{meal.calories} Calories</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MealPlan;
