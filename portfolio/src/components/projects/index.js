import React from 'react';
import './style.css';
import musicTrivia from './../../images/music-trivia-1.png'
import geographun from './../../images/project-geografun-1.png'
import wordguess from './../../images/word-guess-1.png'
 
class Projects extends React.Component {
 
  render() {
    return (
        <div className="projectGrid">
            <div><img className="firstProj" src={musicTrivia} alt="logo" /></div>
            <div><img className="secondProj" src={geographun} alt="logo" /></div>
            <div><img className="thirdProj"src={wordguess} alt="logo" /></div>
            <div><img className="fourthProj"src={wordguess} alt="logo" /></div>
            <div><img className="fithProj"src={wordguess} alt="logo" /></div>
            <div><img className="sixthProj"src={wordguess} alt="logo" /></div>
        </div>
        
    );
  }
 
}
export default Projects;