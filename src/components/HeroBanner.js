import React from 'react';
import { Box, Stack, Typography } from '@mui/material';


const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="40px" >
    <Typography color="#FF2625" fontWeight="500" fontSize="26px" fontFamily="Inter">Fitness Club</Typography>
    <Typography fontWeight={400} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px" fontFamily="Inter">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Inter" lineHeight="35px" fontWeight={300}>
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '16px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={400} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Desire
    </Typography>
    <img src='https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/w0hwpe10avsj95u3ogtf/indy-light-support-sports-bra-ZbB5wc.jpg' alt="hero-banner" className="hero-banner-img" />
    
  </Box>
  
);

export default HeroBanner;
