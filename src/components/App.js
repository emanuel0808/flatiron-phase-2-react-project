import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Header';
import MealPlan from './MealPlan';
import Footer from './Footer';
import MealCard from './MealCard';
import MealForm from './MealForm';

function App() {
  // Define the mealPlan state variable and set it to an empty array initially
  const [mealPlan, setMealPlan] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]); // State for filtered meals

  useEffect(() => {
    // Fetch meal plan data from your API or source
    fetch('http://localhost:3000/mealPlan')
      .then((response) => response.json())
      .then((data) => {
        setMealPlan(data);
        setFilteredMeals(data); // Initialize filteredMeals with all meals
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Function to handle the search for meals by day
  const handleSearch = (searchDay) => {
    // Filter the meals based on the entered day
    const filtered = mealPlan.filter((dayData) =>
      dayData.day.toLowerCase().includes(searchDay.toLowerCase())
    );
    setFilteredMeals(filtered); // Update the filteredMeals state
  };

  return (
    <Router>
      <div>
        <Header />
        <MealPlan />
        <Footer />
        <MealForm onSearch={handleSearch} /> {/* Pass the search function to MealForm */}
        <div className="meal-card-container">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  {/* Check if filteredMeals is defined before mapping */}
                  {filteredMeals &&
                    filteredMeals.map((dayData, index) => (
                      <MealCard
                        key={index}
                        day={dayData.day}
                        image={dayData.image}
                        meals={dayData.meals}
                      />
                    ))}
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
