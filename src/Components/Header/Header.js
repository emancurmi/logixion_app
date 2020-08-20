import React, { Component } from 'react';
import './Header.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <Link className="menu-item" to="/"><h1>Logi<strong className="red">X</strong>On</h1></Link>
        )
    }
}