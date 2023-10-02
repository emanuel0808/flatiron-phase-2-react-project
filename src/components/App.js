import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Header';
import MealPlan from './MealPlan';
import Footer from './Footer';
import MealCard from './MealCard';
import MealForm from './MealForm';
import About from './About'; // Import the About component
import Contact from './Contact'; // Import the Contact component

function App() {
  const [mealPlan, setMealPlan] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/mealPlan')
      .then((response) => response.json())
      .then((data) => {
        setMealPlan(data);
        setFilteredMeals(data); // Initialize filteredMeals with all meals
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

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
        <div className="welcome-section">
          <h2>Welcome to Our Meal-Prep App</h2>
          <p>
            Start your journey to a healthier lifestyle with our carefully crafted meal plans.
            Whether you're looking to shed a few pounds or simply eat better, we've got you covered.
          </p>
        </div>
        <MealForm onSearch={handleSearch} />
        <div className="meal-card-container">
          {filteredMeals.map((dayData, index) => (
            <MealCard
              key={index}
              day={dayData.day}
              image={dayData.image}
              meals={dayData.meals}
              smallSize // Add a prop to indicate smaller size
            />
          ))}
        </div>
        <Footer />
        
        {/* Define routes for About and Contact */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
