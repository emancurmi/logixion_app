import React, { Component } from 'react'
import './Login.css';

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="center red-strip">
                    <h1>Login</h1>
                    <form>
                        <input type="Text" placeholder="Username" required /><br />
                        <input type="password" placeholder="Password" required /><br /><br />
                        <button id="btnSubmit" className="btn"><span>Login</span></button>
                    </form>
                    <br />
                    <p>Don't have an account ? <a href="/register">Register</a></p>
                </div>
                <div className="left">
                    <h2>Why is good to register</h2>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    </div>
            </div>
        )
    }
}