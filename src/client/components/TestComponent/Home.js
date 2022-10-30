import React, { useState, useEffect } from 'react';

function Home() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch('/api/meals')
      .then((res) => res.json())
      .then((data) => setMeals(data.price));
  }, []);

  return (
    <div>
      {' '}
      <h1>test{meals}</h1>
    </div>
  );
}

export default Home;
