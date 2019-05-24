import React from 'react';
import './style.css';
import fittraker from './../shared/images/fittraker.png'
import geographun from './../shared/images/project-geografun-1.png'
import gold from './../shared/images/gold.png'
import tagCloud from './../shared/images/tagcloud.png'

class Projects extends React.Component {

  render() {
    return (
      <div className="projectGrid">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="projTile" src={gold} alt="gold screen capture" />
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
              <img className="projTile" src={fittraker} alt="fittracker screenn capture" />
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
              <img className="projTile" src={geographun} alt="geographun screen capture" />
            </div>
            <div className="flip-card-back">
              <h1 className="projTitle">GeographFun</h1>
              <p className="projDescription">This is a web learning tool that allows users to learn about geography in a fun and interactive way. </p>
              <a href="https://github.com/sharonpamela/Project-GeographFun" target="_blank" rel="noopener noreferrer"><button className="repoButton">Go to Repo</button></a>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="projTile" src={tagCloud} alt="tagCloud screen capture" />
            </div>
            <div className="flip-card-back">
              <h1 className="projTitle">Word Cloud</h1>
              <p className="projDescription">This app renders a word cloud based on input entered by a user in the form of a paragraph. </p>
              <a href="https://github.com/sharonpamela/tagCloud" target="_blank" rel="noopener noreferrer"><button className="repoButton">Go to Repo</button></a>
            </div>
          </div>
        </div>
        
      </div>
    );
  }

}
export default Projects;