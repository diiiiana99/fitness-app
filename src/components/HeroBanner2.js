import React from 'react'
import '../App.css'

import Video from '../assets/images/video2.mp4'

function HeroBanner2() {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h1>First Class Workout Routines</h1>
                <h2>Top 1% Worldwide</h2>

            </div>
        </div>
    )
}

export default HeroBanner2