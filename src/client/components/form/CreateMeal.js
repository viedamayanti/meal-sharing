import React, { useState } from 'react';

function CreateMeal() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const meal = {
      title,
      description: desc,
      location,
      time,
      price,
      created_date: date,
    };
    console.log(meal);

    fetch('http://localhost:5000/api/meals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(meal),
    }).then(() => {
      alert('New meal added');
    });
  };
  return (
    <div className='form'>
      <h1>Create new meal</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Title:</label> <br />
          <input
            type='text'
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />{' '}
          <br />
          <label>Description:</label> <br />
          <input
            type='text'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />{' '}
          <br />
          <label>Location:</label> <br />
          <input
            type='text'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />{' '}
          <br />
          <label>Time:</label> <br />
          <input
            type='text'
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <label>Price:</label> <br />
          <input
            type='text'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label>Date:</label> <br />
          <input
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button>Add new meal</button>
        </form>
      </div>
    </div>
  );
}

export default CreateMeal;
