import React, { Component } from 'react';
import './Nav.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default class Nav extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                </ul>
            </nav>
        )
    }
}