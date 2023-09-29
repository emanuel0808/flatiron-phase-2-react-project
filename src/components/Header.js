import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Meal-Prep App</h1>
      <p>Are you ready to embark on a journey to a healthier, happier you? Introducing MealPrepPro, your ultimate companion on the path to successful weight loss and better eating habits.</p>
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
