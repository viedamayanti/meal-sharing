import React, { useState } from 'react';
function Reservation() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [person, setPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [theDate, setTheDate] = useState('');
  const [id, setId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      contact_name: name,
      contact_email: email,
      number_of_guests: person,
      contact_phonenumber: phone,
      created_date: theDate,
      meal_id: id,
    };
    fetch('http://localhost:5000/api/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(() => {
      console.log(data);
    });
  };

  return (
    <div className='form'>
      <h1>Reservation Form</h1>
      <div className='row'>
        <div className='col-sm'>
          <div>
            <form onSubmit={handleSubmit}>
              <label>Id number:</label> <br />
              <input
                type='text'
                value={id}
                onChange={(e) => setId(e.target.value)}
              />{' '}
              <br />
              <label>Name:</label> <br />
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />{' '}
              <br />
              <label>Email:</label> <br />
              <input
                type='text'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />{' '}
              <br />
              <label>Phone:</label> <br />
              <input
                type='text'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />{' '}
              <br />
              <label>Number of person:</label> <br />
              <input
                type='number'
                value={person}
                onChange={(e) => setPerson(e.target.value)}
              />{' '}
              <br />
              <label>Created date:</label> <br />
              <input
                type='date'
                value={theDate}
                onChange={(e) => setTheDate(e.target.value)}
              />{' '}
              <br />
              <button type='submit'>Order</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
