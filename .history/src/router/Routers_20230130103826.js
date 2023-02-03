import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { SearchResultList, Tour, TourDetails, Login, Register, Home } from '../pages';

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to='/home' />} />
        <Route path="/home" />
    </Routes>
  )
}

export default Routers