import React, { Component } from "react";
import "./Work.css";

export default class Work extends Component {
	render() {
		return (
			<div>
				<h2 id="pageTitle">Réalisations</h2>
				<div id="realisations-container">
					<div className="realisation">
						<div className="realisation-inner">
							<div className="realisation-text">
								<h3>Ma réalisation</h3>
								<hr />
								<h4>Une lègère description</h4>
								<a href="#">Voir la suite &rarr;</a>
							</div>
							<div className="realisation-image-container">
								<img
									src="https://picsum.photos/640/360"
									alt=""
								/>
							</div>
						</div>
					</div>
					<div className="realisation">
						<div className="realisation-inner">
							<div className="realisation-text">
								<h3>Ma réalisation</h3>
								<hr />
								<h4>Une lègère description</h4>
								<a href="#">Voir la suite &rarr;</a>
							</div>
							<div className="realisation-image-container">
								<img
									src="https://picsum.photos/640/360"
									alt=""
								/>
							</div>
						</div>
					</div>
					<div className="realisation">
						<div className="realisation-inner">
							<div className="realisation-text">
								<h3>Ma réalisation</h3>
								<hr />
								<h4>Une lègère description</h4>
								<a href="#">Voir la suite &rarr;</a>
							</div>
							<div className="realisation-image-container">
								<img
									src="https://picsum.photos/640/360"
									alt=""
								/>
							</div>
						</div>
					</div>
					<div className="realisation">
						<div className="realisation-inner">
							<div className="realisation-text">
								<h3>Ma réalisation</h3>
								<hr />
								<h4>Une lègère description</h4>
								<a href="#">Voir la suite &rarr;</a>
							</div>
							<div className="realisation-image-container">
								<img
									src="https://picsum.photos/640/360"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
