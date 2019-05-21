import React from 'react';
import './style.css';
import arrow from './arrow.png';
import Projects from './../projects/'

function Welcome() {

    return (
        <div className="container">
            <div className="welcomeContainer">
                <span className="name">Hello, I'm Sharon Santana</span>
                <span className="intro"> Full-stack web developer based in the bay area.</span>
            </div>

            {/* <div className="arrowDiv" > <img className="arrow" src={arrow} alt="arrow icon" /> </div> */}

        </div> 
    )
}

export default Welcome
