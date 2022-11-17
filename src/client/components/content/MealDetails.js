// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardContainer from './CardContainer';

function MealDetails() {
  const { id } = useParams();
  const [mealText, setMealText] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/api/meals/${id}`)
      .then((response) => response.json())
      .then((data) => setMealText(data[0]));
  }, []);

  return (
    <div className='meal-details'>
      <div>
        <h2>Hello user {id}</h2>
      </div>
      <div>
        <CardContainer
          title={mealText.title}
          description={mealText.description}
          time={mealText.time}
          location={mealText.location}
          id={mealText.id}
        />
      </div>
    </div>
  );
}

export default MealDetails;
