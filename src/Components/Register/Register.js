import React, { Component } from 'react';
import './Register.css';

export default class Register extends Component {
    render() {
        return (
            <div className="center red-strip">
                <h3>Register</h3>
                <form>
                    <input type="Text" placeholder="Username" required /><br />
                    <input type="password" placeholder="Password" required /><br /><br />
                    <button id="btnRegister" className="btn">Register</button>
                </form>
                <br />
                <p>Already have an account? <a href="/login">Login</a></p>
            </div>
        )
    }
}