import React, { Component } from 'react';
import Home from './components/home/Home';
import Work from './components/work/Work';
import About from './components/about/About'
import Nav from './components/nav/Nav';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="wrapper">
                    <Nav />
                    <Route exact path="/" component={Home} />
                    <Route path="/a-propos" component={About} />
                    <Route path="/realisations" component={Work} />
                </div>
            </Router>
        );
    }
}

export default App;
