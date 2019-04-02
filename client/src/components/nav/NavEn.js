import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default class NavEn extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/en">Fayçal</Link></li>
          <li className="separator"> | </li>
          <li><Link to="/en/work">Work</Link></li>
          <li><Link to="/en/about">About</Link></li>
        </ul>
        <ul>
          <li><small><Link to="/en">EN</Link> | <Link to="/">FR</Link></small></li>
        </ul>
      </nav>
    )
  }
}
