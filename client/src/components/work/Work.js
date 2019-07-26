import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Work.css";
import Spinner from "../../assets/spinner.gif";

export default class Work extends Component {
    state = {
        projets: null
    };
    componentDidMount() {
        const url = "//api.faycalhammoudi.fr/wp-json/wp/v2/project";
        fetch(url)
            .then(res => res.json())
            .then(projets => this.setState({ projets }));
    }
    render() {
        if (this.state.projets) {
            return (
                <div id="realisations">
                    <div id="pageTitle">
                        <h1>réalisations</h1>
                    </div>
                    <div id="realisations-container">
                        {this.state.projets.map((projet, index) => (
                            <div key={index} className="realisation" style={{ "--delai": (index * 0.1) + 0.5 + "s" }}>
                                <div className="realisation-inner">
                                    <div className="realisation-text">
                                        <h3
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    projet.title.rendered
                                            }}
                                        >
                                            {}
                                        </h3>
                                        <hr />
                                        <Link
                                            to={`/realisations/${
                                                projet.slug
                                                }`}
                                        >
                                            Voir le projet &rarr;
											</Link>
                                    </div>
                                    <div className="realisation-image-container">
                                        <Link
                                            to={`/realisations/${projet.slug}`}
                                        >
                                            <img
                                                src={projet.acf.project_img}
                                                alt=""
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div id="pageTitle">
                        <h2>réalisations</h2>
                    </div>
                    <div id="loading">
                        <img src={Spinner} alt="Loading..." />
                    </div>
                </div>
            );
        }
    }
}
