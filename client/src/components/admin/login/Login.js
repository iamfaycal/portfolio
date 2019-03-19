import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import md5 from "md5";
import "./Login.css";

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.name === "password" ? md5(e.target.value) : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        fetch('/api/login', { method: 'POST', body: { username: "test" } })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="login">
                <form className="loginForm" onSubmit={this.handleSubmit}>
                    <h1>Connexion</h1>
                    <TextField
                        label="Identifiant"
                        type="text"
                        name="username"
                        margin="normal"
                        fullWidth={true}
                        onChange={this.handleChange}
                    /><br />
                    <TextField
                        label="Mot de passe"
                        type="password"
                        name="password"
                        margin="normal"
                        fullWidth={true}
                        onChange={this.handleChange}
                    />
                    <br /><br />
                    <Button variant="contained" color="primary" type="submit">
                        Se connecter
                    </Button>
                </form>
            </div>
        );
    }
}
