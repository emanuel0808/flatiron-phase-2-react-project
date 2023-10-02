import React, { useState } from 'react';

function MealForm({ onSearch }) {
  const [searchDay, setSearchDay] = useState('');

  const handleSearch = () => {
    // Pass the searchDay value to the parent component (App.js) for handling the search
    onSearch(searchDay);
  };

  return (
    <div className="meal-form">
      <input
        type="text"
        placeholder="Enter a day of the week"
        value={searchDay}
        onChange={(e) => setSearchDay(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default MealForm;
