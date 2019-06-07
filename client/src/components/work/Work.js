import React, { Component } from 'react'

export default class Work extends Component {
    render() {
        return (
        <div>
            <h2>Réalisations</h2>
            <div className="realisations-container">
                <div className="realisation">
                    <div className="realisation-inner">
                        <h3>Ma réalisation</h3>
                        <hr/>
                        <h4>Une lègère description &rarr;</h4>
                        <img src="https://picsum.photos/640/360" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
