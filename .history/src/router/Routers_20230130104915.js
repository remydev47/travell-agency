import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { SearchResultList, Tours, TourDetails, Login, Register, Home } from '../pages';

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to='/home' />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours:id" element={<TourDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tours/search" element={<SearchResultList />} />
    </Routes>
  )
}

export default Routers