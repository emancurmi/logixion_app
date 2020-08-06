import React, { Component } from 'react';
import Header from '../Header/Header';
import './Nav.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'

export default class Nav extends Component {
    render() {
        return (
            <Menu>
                <Link className="menu-item" to="/">Home</Link>
                <Link className="menu-item" to="/about">About</Link>
                <Link className="menu-item" to="/tourbench">Tour Bench</Link>
                
            </Menu>
        )
    }
}

//<Link className="menu-item" to="/login">Login</Link>
//    <Link className="menu-item" to="/register">Register</Link>