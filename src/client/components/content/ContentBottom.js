import React, { useState, useEffect } from 'react';
import CardContainer from './CardContainer';
// import useFetch from '../header/useFetch';
// import { Link } from 'react-router-dom';

function ContentBottom() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/meals')
      .then((response) => response.json())
      .then((data) => setMeals(data.meals));
  }, []);
  return (
    <div className='middle-home'>
      {meals.map((item) => (
        <div className='row' key={item.id}>
          <div className='col-sm'>
            <CardContainer
              id={item.id}
              title={item.title}
              description={item.description}
              time={item.time}
              location={item.location}
            ></CardContainer>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContentBottom;
