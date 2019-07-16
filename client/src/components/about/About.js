import React, { Component } from 'react';
import Me from '../../assets/me.jpg';
import "./About.css";

export default class About extends Component {
    render() {
        return (
            <div id="about">
                <div className="tilted">
                    <h1>à propos</h1>
                    <img src={Me} alt="Fayçal HAMMOUDI" />
                </div>
                <div className="text">
                    <h2 className="huge">développeur full-stack</h2>
                    <p className="paragraph">
                        Je suis Fayçal, développeur web avec des compétences en webdesign. Je développe des sites internet et des applications web sur Mulhouse
                    </p>
                    <h2 className="huge">mes compétences</h2>
                    <pre className="paragraph">
                        {
                            JSON.stringify(
                                {
                                    "os": {
                                        "windows": "de Windows XP à Windows 10",
                                        "macos": "de El Capitan à Mojave",
                                        "linux": [
                                            "debian",
                                            "ubuntu",
                                            "arch",
                                            "manjaro",
                                            "kali"
                                        ]
                                    },
                                    "CMS": {
                                        "Wordpress": "Développement de modules en PHP"
                                    },
                                    "server, api & backend": [
                                        "Apache",
                                        "Node.js",
                                        "Express.js",
                                        "Gulp",
                                        "PHP"
                                    ],
                                    "database": [
                                        "MySQL",
                                        "MariaDB",
                                        "MongoDB"
                                    ],
                                    "front-end": {
                                        "HTML": "4 et 5",
                                        "CSS": "3 et 4",
                                        "JS": "ES5 à ES7",
                                        "React.js": "v16",
                                        "Bootstrap": "3 et 4",
                                        "Angular": "v2 et plus"
                                    },
                                    "software": [
                                        "Photoshop",
                                        "Illustrator",
                                        "InDesign",
                                        "Premiere Pro",
                                        "After Effects",
                                        "DaVinci Resolve"
                                    ],
                                    "mobile": [
                                        "ionic"
                                    ]
                                },
                                null,
                                4
                            )
                        }
                    </pre>
                </div>
            </div>
        )
    }
}
