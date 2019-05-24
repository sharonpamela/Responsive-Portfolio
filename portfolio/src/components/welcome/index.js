import React from 'react';
import './style.css';
import { BrowserRouter as Link, NavLink } from "react-router-dom";

function Welcome() {

    return (
        <div className="container">
            <div className="welcomeContainer">
                <span className="name">Hello, I'm Sharon Santana</span>
                <span className="intro"> Full-stack web developer based in the bay area.</span>
            </div>

            <p className="learnMore">Click <NavLink exact to="/about/">here</NavLink> to learn more about me.</p>

        </div> 
    )
}

export default Welcome
