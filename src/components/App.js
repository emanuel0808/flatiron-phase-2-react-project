import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import MealPlan from './MealPlan';
import Footer from './Footer';
import MealCard from './MealCard';
import Main from './Main'; // Import the Main component for routing

function App() {
  const [mealPlan, setMealPlan] = useState([]);

  useEffect(() => {
    // Fetch meal plan data from your API or source
    fetch('http://localhost:3000/mealPlan')
      .then((response) => response.json())
      .then((data) => setMealPlan(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <MealPlan mealPlanData={mealPlan} />
          </Route>
          <Route path="/about">
            {/* Add your About component here */}
          </Route>
          <Route path="/contact">
            {/* Add your Contact component here */}
          </Route>
        </Switch>
        <Footer />
        <div className="meal-card-container">
          {mealPlan.map((dayData, index) => (
            <MealCard
              key={index}
              day={dayData.day}
              image={dayData.image}
              meals={dayData.meals}
            />
          ))}
        </div>
      </div>
    </Router>
  );
}

export default App;
