import React, { Component } from 'react'
import './Login.css';

export default class Login extends Component {
    render() {
        return (
            <div>
                <h3>Login</h3>
                <form>
                    <label>Username:</label><br/>
                    <input type="Text" /><br/>
                    <label>Password:</label><br/>
                    <input type="password" /><br/><br/>
                    <button id="btnSubmit">Submit</button>
                    <button id="btnReset">Reset</button>
                </form>
                <br/>
                <p>Don't have an account ? <a href="#">Register</a></p>
            </div>
        )
    }
}