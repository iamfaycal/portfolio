import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Work.css";

export default class Single extends Component {
    state = {
        projet: null
    };
    componentDidMount() {
        const { slug } = this.props.match.params;

        const url =
            "https://faycalhammoudi.fr/wp-json/wp/v2/project?slug=" + slug;
        fetch(url)
            .then(res => res.json())
            .then(projet => this.setState({ projet: projet[0] }));
    }
    render() {
        if (this.state.projet) {
            return (
                <div>
                    <div id="pageTitle">
                        <Link to="/realisations">&larr; Retour</Link>
                        <h2
                            dangerouslySetInnerHTML={{
                                __html: this.state.projet.title.rendered
                            }}
                        />
                    </div>
                    <div id="single-realisation">
                        <div className="single-realisation-inner">
                            <div className="single-realisation-image-container">
                                <img
                                    src={this.state.projet.acf.project_img}
                                    alt=""
                                />
                            </div>
                            <div className="single-realisation-text">
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: this.state.projet.acf
                                            .project_description
                                    }}
                                />
                                <a
                                    href={this.state.projet.acf.project_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Voir le site &rarr;
								</a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return "Loading";
        }
    }
}
