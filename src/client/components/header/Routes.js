import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../content/Home';
import Reservation from '../form/Reservation';
import MealDetails from '../content/MealDetails';
import CreateMeal from '../form/CreateMeal';

function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/create' element={<CreateMeal />} />
      <Route path='/reservation' element={<Reservation />} />
      <Route path='/meals/:id' element={<MealDetails />} />
    </Routes>
  );
}

export default Routers;
