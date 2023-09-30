import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Header';
import MealPlan from './MealPlan';
import Footer from './Footer';
import MealCard from './MealCard';
import About from './About'; // Import the About component
import Contact from './Contact'; // Import the Contact component

function App() {
  // Define the mealPlan state variable and set it to an empty array initially
  const [mealPlan, setMealPlan] = useState([]);

  useEffect(() => {
    // Fetch meal plan data from your API or source
    fetch('http://localhost:3000/mealPlan')
      .then((response) => response.json())
      .then((data) => setMealPlan(data)) // Update the mealPlan state with fetched data
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <MealPlan />
        <Footer />
        <div className="meal-card-container">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  {/* Check if mealPlan is defined before mapping */}
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
            <Route path="/about" element={<About />} /> {/* Route to the About component */}
            <Route path="/contact" element={<Contact />} /> {/* Route to the Contact component */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;



