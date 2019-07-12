import React, { Component } from 'react'
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <a href="/">Fayçal HAMMOUDI</a> | Tout droits réservés &copy; {new Date().getFullYear()}
            </footer>
        )
    }
}
