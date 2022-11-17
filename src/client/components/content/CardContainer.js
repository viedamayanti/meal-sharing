import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CardContainer({ title, description, time, location, id }) {
  const [meal, setMeal] = useState('');
  useEffect(() => {
    fetch(`http://localhost:5000/api/meals/${id}`)
      .then((response) => response.json())
      .then((data) => setMeal(data.meals));
  }, []);

  return (
    <div className='card-container'>
      <Link to={`/meals/${id}`}>
        <div>{meal}</div>

        <div className='image-body'>
          <ul>
            <li> Title: {title} </li>
            <li> Description: {description} </li>
            <li>Location: {location}</li>
            <li>Time: {time}</li>
            <li>Id: {id}</li>
          </ul>{' '}
        </div>
      </Link>
    </div>
  );
}

export default CardContainer;
