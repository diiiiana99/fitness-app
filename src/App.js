import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import HeroBanner2 from './components/HeroBanner2';

import Navbar from './components/Navbar';

const App = () => (
  <Box width="200px" sx={{ width: { xl: '1600px' } }} m="auto">
    {/* <Navbar /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      <Route path="/trainers" element={<HeroBanner2 />} />

    </Routes>
  </Box>
);

export default App;