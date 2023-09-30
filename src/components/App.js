// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Header';
import MealPlan from './MealPlan';
import Footer from './Footer';
import MealCard from './MealCard';
import Home from './Home';
import About from './About';
import Contact from './Contact'; // Import the Contact component

function App() {
  const [mealPlan, setMealPlan] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/mealPlan')
      .then((response) => response.json())
      .then((data) => setMealPlan(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Home />
                {mealPlan &&
                  mealPlan.map((dayData, index) => (
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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> {/* Use the Contact component */}
        </Routes>
        <MealPlan />
        <Footer />
      </div>
    </Router>
  );
}

export default App;


