import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default class Nav extends Component {
  render() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Fayçal</Link></li>
                <li className="separator"> | </li>
                <li><Link to="/realisations">Réalisation</Link></li>
                <li><Link to="/a-propos">À Propos</Link></li>
            </ul>
        </nav>
    )
  }
}
