import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default class Nav extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">Fayçal</Link>
                    </li>
                    <li className="separator"> | </li>
                    <li>
                        <Link to="/realisations">réalisations</Link>
                    </li>
                    <li>
                        <Link to="/a-propos">à propos</Link>
                    </li>
                    <li>
                        <Link to="/contact">contact</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/faycal-hammoudi/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                </ul>
                {/*
                <ul>
                    <li><small><Link to="/en">EN</Link> | <Link to="/">FR</Link></small></li>
                </ul>
                */}
            </nav>
        );
    }
}
