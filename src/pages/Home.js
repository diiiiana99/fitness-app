import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';
import HeroBanner2 from '../components/HeroBanner2';

import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Info from '../components/Info';
import Trainers from '../components/Trainers';





const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <Banner />
      <Navbar/>
      <HeroBanner />
      <Info/>
   

     <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} /> 
     <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  );
};

export default Home;