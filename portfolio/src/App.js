import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Welcome from './components/welcome';
// import Projects from './components/projects';
import Work from './components/work';
import About from './components/about';
import NavBar from './components/navbar';
import Footer from './components/footer';
import NoMatch from "./components/nomatch";
import './reset.css';
import './style.css';


function App() {
    return (
        <Router>
            <div className="App">
            <Route path="/" component={NavBar} />
                <Switch>
                    <Route path="/" component={Work} />
                    <Route exact path="/about" component={About} />
                    <Route component={NoMatch} />
                </Switch>
                <Route path="/" component={Footer} />
                {/* <Welcome className="welcome" />
                <Projects className="projects" /> */}
            </div>
        </Router>
    );
}
export default App