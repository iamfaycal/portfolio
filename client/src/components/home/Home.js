import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="heading">
                    <h1>
                        <span className="colorBox" />
                        <span className="text">Salut, je suis Fayçal</span>
                    </h1>
                    <h2 className="subtitle">
                        <span className="colorBox" />
                        <span className="text">développeur full-stack</span>
                    </h2>
                </div>
            </div>
        );
    }
}
