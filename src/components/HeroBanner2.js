
import React from 'react'
import '../App.css'
import Trainers from './Trainers'

import Video from '../assets/images/video2.mp4'

function Banner() {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"><p className='p'>GetFit</p></div>
            <div className="content">
                <h1 className='title'>Build confidence in the gym</h1>
                <h2 className='title'>20,000+ 5 Star App Reviews</h2>
                <h3 className='title'>Try GetFit for 7 days for free and start your journey to wellness with me!</h3>

                <a href="#exercises" style={{ marginTop: '150px', marginLeft:'1200px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '16px',   opacity:'0.9', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Start Today</a>

            </div>
                       <Trainers/>

        </div>
      
    )
}

export default Banner