import React, { Component, lazy, Suspense } from "react";

import Login from "./components/admin/login/Login";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Spinner from "./assets/spinner.gif";
import "./App.css";

const Home = lazy(() => import("./components/home/Home"));
const HomeEn = lazy(() => import("./components/home/HomeEn"));

const Work = lazy(() => import("./components/work/Work"));
const WorkEn = lazy(() => import("./components/work/WorkEn"));
const Single = lazy(() => import("./components/work/Single"));

const About = lazy(() => import("./components/about/About"));
const AboutEn = lazy(() => import("./components/about/AboutEn"));

const Nav = lazy(() => import("./components/nav/Nav"));
const NavEn = lazy(() => import("./components/nav/NavEn"));

class App extends Component {
    render() {
        return (
            <Router>
                <div className="wrapper">
                    <Suspense
                        fallback={
                            <div id="loading">
                                <img src={Spinner} alt="Loading..." />
                            </div>
                        }
                    >
                        <Switch>
                            <Route path="/en" component={NavEn} />
                            <Route path="/" component={Nav} />
                        </Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/a-propos" component={About} />
                        <Route exact path="/realisations" component={Work} />
                        <Route path="/realisations/:slug" component={Single} />
                        <Route path="/admin/login" component={Login} />

                        <Route exact path="/en" component={HomeEn} />
                        <Route path="/en/about" component={AboutEn} />
                        <Route path="/en/work" component={WorkEn} />
                    </Suspense>
                </div>
            </Router>
        );
    }
}

export default App;
