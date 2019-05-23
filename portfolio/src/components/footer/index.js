import React from 'react';
import './style.css';
import atw from './../shared/images/at.png';
import twitter from './../shared/images/twitter.png';
import linkedin from './../shared/images/linkedin.png';
import github from './../shared/images/github.png';

class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
                <div>© 2019 Sharon Santana</div>
                <ul className="socialMediaButtons">
                    <li className="first-socialMedia"><a href="https://www.linkedin.com/in/sharonpamela/"><img src={linkedin} alt="linkedin" /></a></li>
                    <li className="second-socialMedia"><a href="https://twitter.com/sharonpsantana/"><img src={twitter} alt="twitter" /></a></li>
                    <li className="third-socialMedia"><a href="mailto:sharon.pamela.santana@gmail.com"><img src={atw} alt="at" /></a></li>
                    <li className="forth-socialMedia"><a href="https://github.com/sharonpamela"><img src={github} alt="github" /></a></li>
                </ul>
            </div>
        );
    }

}
export default Footer;




