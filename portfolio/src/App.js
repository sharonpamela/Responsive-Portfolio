import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Work from './components/work';
import About from './components/about';
import NavBar from './components/navbar';
import Footer from './components/footer';
import './reset.css';
import './style.css';

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Route exact path="/" component={Work} />
                <Route exact path="/about/" component={About} />
                <Footer />
            </div>
        </Router>
    );
}
export default App