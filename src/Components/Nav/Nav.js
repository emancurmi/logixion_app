import React, { Component } from 'react';
import './Nav.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul className="main-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/tourbench">Tour Bench</Link></li>
                        <li className="push"></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}