import React, { Component } from 'react';
import { rute, Link, Redirect } from 'react-router-dom';
import config from '../../config';
import './AddTutorial.css';

export default class AddTutorial extends Component {

    constructor(props) {

        super(props);
        this.state = {
            config: config,
            userid: 1,
            error: null
        }
    }

    

    render() {
        return (
            <div>
                <div className="center red-strip">
                   
                </div>
            </div>
        )
    }
}