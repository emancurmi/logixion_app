import React from 'react';
import './Tutorial.css';
import { Component } from 'react';
import { rute, Link } from 'react-router-dom';
import StepsList from '../StepsList/StepsList';

export default class Tutorial extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name
        }
    }


    render() {
        return (
            
                <div className="card">
                    <h3>{this.state.name}</h3>
                    <p>{this.state.url}</p>
                    <br />
                <Link to={`../stepslist/?tutorialid=${this.state.id}&tutorialname=${this.state.name}`}><button id="btnSteps" className="btn"><span>Edit Steps</span></button></Link>
                    <br />
                <Link to={`../edittutorial?tutorialid=${this.state.id}`}><button id="btnEdit" className="btn"><span>Edit Name</span></button></Link>
                    <br/>
                <Link to={`../stepslist/?tutorialid=${this.state.id}&tutorialname=${this.state.name}`}><button id="btnDelete" className="btn"><span>Delete</span></button></Link>
                </div>
        )
    }
}