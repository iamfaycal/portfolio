import React, { Component, /*lazy, Suspense*/ } from "react";
// import Login from "./components/admin/login/Login";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./components/home/Home";
import Work from "./components/work/Work";
import Single from "./components/work/Single";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route render={({ location }) => (
                    <div className="wrapper">
                        <Nav />
                        <TransitionGroup className="transitionGroup">
                            <CSSTransition key={location.key} timeout={1500} classNames="fade">
                                <React.Fragment>
                                    <Switch location={location}>
                                        <Route exact path="/" component={Home} />
                                        <Route exact path="/realisations" component={Work} />
                                        <Route path="/realisations/:slug" component={Single} />
                                        <Route path="/a-propos" component={About} />
                                        <Route path="/contact" component={Contact} />
                                    </Switch>
                                </React.Fragment>
                            </CSSTransition>
                        </TransitionGroup>
                        <Footer />
                    </div>
                )} />
            </BrowserRouter>
        );
    }
}

export default App;
