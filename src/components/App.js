import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MealPlan from './components/MealPlan';
import Footer from './components/Footer';
import MealItem from './components/MealItem'; // Import MealItem component from the "components" directory
import MealCard from './components/MealCard';
function App() {
  const [mealPlan, setMealPlan] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/mealPlan/week') 
      .then((response) => response.json())
      .then((data) => setMealPlan(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Header />
      <MealPlan mealPlanData={mealPlan} />
      <Footer />
    </div>
  );
}

export default App;
