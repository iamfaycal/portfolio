import React, { Component } from "react";

import Home from "./components/home/Home";
import HomeEn from "./components/home/HomeEn";

import Work from "./components/work/Work";
import WorkEn from "./components/work/WorkEn";

import About from "./components/about/About";
import AboutEn from "./components/about/AboutEn";

import Login from "./components/admin/login/Login";

import Nav from "./components/nav/Nav";
import NavEn from "./components/nav/NavEn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="wrapper">
                    <Switch>
                        <Route path="/en" component={NavEn} />
                        <Route path="/" component={Nav} />
                    </Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/a-propos" component={About} />
                    <Route path="/realisations" component={Work} />
                    <Route path="/admin/login" component={Login} />

                    <Route exact path="/en" component={HomeEn} />
                    <Route path="/en/about" component={AboutEn} />
                    <Route path="/en/work" component={WorkEn} />
                </div>
            </Router>
        );
    }
}

export default App;
