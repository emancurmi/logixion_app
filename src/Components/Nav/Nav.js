import React, { Component } from 'react';
import './Nav.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default class Nav extends Component {
    state = {
        isOpen: false
    }

    render() {
        return (
            <div className="menu">
                <Link className="menu-item btn" to="/tourbench">Tour Bench</Link>
            </div>
        )
    }
}