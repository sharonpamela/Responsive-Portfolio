import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import './style.css';
import atw from './../shared/images/at.png';
import twitter from './../shared/../shared/images/twitter.png';
import linkedin from './../shared/images/linkedin.png';
import logo from './../shared/images/logo1.png';
import github from './../shared/images/github.png';

class NavBar extends React.Component {

    render() {
        return (
            <div className="navbar">
                {/* <a className="logo" href="#"><img src={logo} alt="logo" /></a> */}
                <div className="socialMedia">
                    <ul className="socialMediaButtons">
                        <li className="first-socialMedia"><a href="https://www.linkedin.com/in/sharonpamela/"><img src={linkedin} alt="linkedin" /></a></li>
                        <li className="second-socialMedia"><a href="https://twitter.com/sharonpsantana/"><img src={twitter} alt="twitter" /></a></li>
                        <li className="third-socialMedia"><a href="mailto:sharon.pamela.santana@gmail.com"><img src={atw} alt="mail" /></a></li>
                        <li className="forth-socialMedia"><a href="https://github.com/sharonpamela"><img src={github} alt="github" /></a></li>
                    </ul>
                </div>
                <div className="menu">
                    <NavLink exact to="/">Work</NavLink>
                    <NavLink exact to="/about/">About</NavLink> 
                </div>
            </div>
        );
    }

}
export default NavBar;




