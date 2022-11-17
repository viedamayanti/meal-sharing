import React from 'react';
import { Link } from 'react-router-dom';
import image from '../images/Logo-2.png';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <Link to='/home'>
          <img src={image} alt='Logo' width='100px' />
        </Link>
      </div>
      <div className='links'>
        <Link to='/reservation'>Reservation</Link>
        <Link to='/create'>New meal</Link>
      </div>
    </nav>
  );
}

export default Navbar;
