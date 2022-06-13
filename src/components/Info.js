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
            <h2>Earn passive income with crypto.</h2>
            <p>Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits.</p>
            <div className='input-container'>
                <input type='email' placeholder='Enter your email' />
    
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '100px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '12px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Learn More</a>
         
            </div>
        </div>
        </Fade>

    </div>
</div>
  )
}

export default Info
