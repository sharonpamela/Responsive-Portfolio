import React from 'react';
import './style.css';
import fittraker from './../../images/fittraker.png'
import geographun from './../../images/project-geografun-1.png'
import gold from './../../images/gold.png'

class Projects extends React.Component {

  render() {
    return (
      <div className="projectGrid">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="firstProj" src={gold} alt="gold screen capture" />
            </div>
            <div className="flip-card-back">
              <h1 className="projTitle">Gold</h1>
              <p className="projDescription">Gold is a Node.JS react application that fascilitates a dashboard for viewing and comparing crytocurrency prices and other stats. </p>
              <a href="https://github.com/sharonpamela/GoldApp" target="_blank" rel="noopener noreferrer"><button className="repoButton">Go to Repo</button></a>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="secondProj" src={fittraker} alt="fittracker screenn capture" />
            </div>
            <div className="flip-card-back">
              <h1 className="projTitle">FitTraker</h1>
              <p className="projDescription">This application's purpose is to log workouts in a way that is flexible and simple to follow. </p>
              <a href="https://github.com/sharonpamela/FitTraker" target="_blank" rel="noopener noreferrer"><button className="repoButton">Go to Repo</button></a>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="thirdProj" src={geographun} alt="geographun screen capture" />
            </div>
            <div className="flip-card-back">
              <h1 className="projTitle">GeographFun</h1>
              <p className="projDescription">This is a web learning tool that allows users to learn about geography in a fun and interactive way. </p>
              <a href="https://github.com/sharonpamela/Project-GeographFun" target="_blank" rel="noopener noreferrer"><button className="repoButton">Go to Repo</button></a>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
export default Projects;