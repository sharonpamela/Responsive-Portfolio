import React from 'react';
import Welcome from './components/welcome';
import Projects from './components/projects';
import './reset.css';
import './style.css';


function App() {
    return(
        <div className="App">
             <Welcome />
             <Projects />
        </div>
       
    )
}


export default App

