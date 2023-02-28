import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Crew from './pages/Crew';
import Destination from './pages/Destination';
import Home from './pages/Home';
import Technology from './pages/Technology';

function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/technology" element={<Technology />} />
    </Routes>
  );
}

export default App;
