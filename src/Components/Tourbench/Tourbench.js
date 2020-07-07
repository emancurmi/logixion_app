import React, { Component } from 'react';
import './Tourbench.css';
import config from '../../config';

import TutorialsList from '../TutorialsList/TutorialsList';

export default class Tourbench extends Component {

    render() {
        return (
            <div>
                <h1>Tutorials</h1>
                <TutorialsList config={config} />
            </div>
        );
    }
}