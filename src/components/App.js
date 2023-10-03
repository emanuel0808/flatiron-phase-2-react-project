import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Header';
import MealPlan from './MealPlan';
import Footer from './Footer';
import MealCard from './MealCard';
import MealForm from './MealForm';
import About from './About';
import Contact from './Contact';

function App() {
  const [mealPlan, setMealPlan] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/mealPlan')
      .then((response) => response.json())
      .then((data) => {
        setMealPlan(data);
        setFilteredMeals(data); 
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (searchDay) => {
    
    const filtered = mealPlan.filter((dayData) =>
      dayData.day.toLowerCase().includes(searchDay.toLowerCase())
    );
    setFilteredMeals(filtered); 
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
         <p>
        
           Our app provides carefully crafted meal plans designed to assist with weight loss and improve overall health. We believe that nutritious food is the foundation of a healthier you, and we're here to make it easy and delicious.

         </p>
         <p>
          Feel free to explore the app and see all the delicious meals you can add to your diet to improve your overall health.
         </p>
      
     
        
        </div>
        <MealForm onSearch={handleSearch} />
        
      
        {window.location.pathname === '/' && (
          <div className="meal-card-container">
            {filteredMeals.map((dayData, index) => (
              <MealCard
                key={index}
                day={dayData.day}
                image={dayData.image}
                meals={dayData.meals}
                smallSize 
              />
            ))}
          </div>
        )}

     
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
