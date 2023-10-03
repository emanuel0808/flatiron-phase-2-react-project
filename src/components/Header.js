import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Meal-Prep App</h1>
      <p>Are you ready to embark on a journey to a healthier, happier you? Introducing Meal-Prep APP, your ultimate companion on the path to successful weight loss and better eating habits.

      Our mission is to help you achieve your health and fitness goals by providing delicious and nutritious meal plans designed for weight loss and overall well-being. With Meal-Prep APP, you'll discover a world of culinary delights that not only satisfy your taste buds but also support your journey to a healthier lifestyle.
      </p>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
