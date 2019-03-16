import React, { Component } from "react";
import "./Login.css";

import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <h1>Login</h1>
                <form>
                    <TextField label="Identifiant" variant="outlined" />
                </form>
            </div>
        );
    }
}
