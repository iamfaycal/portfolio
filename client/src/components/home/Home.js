import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
	render() {
		return (
			<div className="home">
				<div className="heading">
					<h1>
						<span className="colorBox" />
						<span className="text">Hello, je suis Fayçal</span>
					</h1>
					<h2 className="subtitle">
						<span className="colorBox" />
						<span className="text">
							Developpeur full-stack freelance
						</span>
					</h2>
				</div>
			</div>
		);
	}
}
