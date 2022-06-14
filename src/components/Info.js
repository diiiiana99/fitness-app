import React from 'react'
import { Fade } from 'react-reveal'
import { Box, Stack, Typography } from '@mui/material';


const Info = () => {
  return (
    <div className='signup'>
    <div className='container'>
        {/* left */}
        <Fade bottom>
        <div className='left'>
            <img className='img' src='https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/4c938077-82ed-45c7-8704-3225ae321d4d/nike-training-club-app-home-workouts-more.jpg' alt='' />
        </div>
        </Fade>

        {/* right */}
        <Fade right>
        <div className='right'>
            <h2 className='title2'>You can workout absolutely anywhere.</h2>
            <p>Choose from thousands of workouts for home or gym in 19 different training styles.</p>
            <div className='input-container'>
                <input type='email' placeholder='Enter your email' />
    
      <a href="#exercises" style={{ marginTop: '45px', marginLeft: '10px' , textDecoration: 'none', width: '100px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '16px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Learn More</a>
         
            </div>
           
        </div>
        
        </Fade>
    
    </div>
    <Typography paddingLeft='600px' fontWeight={200} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Focus
    </Typography>
</div>
  )
}

export default Info
