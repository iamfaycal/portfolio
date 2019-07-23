import React, { Component } from 'react'
import 'material-design-icons/iconfont/material-icons.css';
import './Contact.css';

export default class Contact extends Component {
    state = {
        name: "",
        email: "",
        message: ""
    }
    constructor(props) {
        super(props)
        this.submitMessage = this.submitMessage.bind(this);
        this.update = this.update.bind(this);
    }
    render() {
        return (
            <div id="Contact">
                <div id="pageTitle">
                    <h1>contact</h1>
                </div>
                <form>
                    <h2>Pour me contacter, merci d'uiliser le formulaire ci-dessous</h2>
                    <div className="input-group">
                        <i className="material-icons">person</i>
                        <input type="text" name="name" placeholder="Votre nom" onChange={e => this.update(e)} />
                    </div>
                    <div className="input-group">
                        <i className="material-icons">email</i>
                        <input type="email" name="email" placeholder="Votre adresse email" onChange={e => this.update(e)} />
                    </div>
                    <div className="input-group">
                        <textarea name="message" placeholder="Votre message" onChange={e => this.update(e)}></textarea>
                    </div>
                    <div className="input-group">
                        <input type="submit" value="Envoyer &rarr;" onClick={e => this.submitMessage(e)} />
                    </div>
                </form>
                <iframe title="map" width="50%" height="500px" frameBorder="0" allowFullScreen src="https://umap.openstreetmap.fr/fr/map/faycalhammoudi_349017?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=false&allowEdit=false&moreControl=false&searchControl=false&tilelayersControl=false&embedControl=false&datalayersControl=false&onLoadPanel=undefined&captionBar=false&fullscreenControl=false&locateControl=false&measureControl=false&editinosmControl=false#14/47.7469/7.3384"></iframe>
            </div>
        )
    }

    submitMessage(e) {
        e.preventDefault();
        fetch("/api/message", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
            .then(res => console.log(res.status))
            .catch(err => console.log(err))
    }

    update(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }
}
