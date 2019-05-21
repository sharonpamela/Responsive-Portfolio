import React from 'react';
import Welcome from './components/welcome';
import Projects from './components/projects';
import NavBar from './components/navbar';
import Footer from './components/footer';
import './reset.css';
import './style.css';


function App() {
    return(
        <div className="App">
            <NavBar />
            <Welcome className="welcome"/>
            <Projects className="projects"/>
            <Footer />
        </div>
       
    )
}


export default App

