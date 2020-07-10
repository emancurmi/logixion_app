import React from 'react'
import './Tutorial.css'
import { Component } from 'react'
import { rute, Link } from 'react-router-dom'
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
            <Link to={`../stepslist/?tutorialid=${this.state.id}&tutorialname=${this.state.name}`}>
                <div class="card">
                    <h3>{this.state.name}</h3>
                    <p>{this.state.url}</p>
                    <br />
                    <button id="btnEdit" className="btn"><span>Edit</span></button>
                    <br/>
                    <button id="btnDelete" className="btn"><span>Delete</span></button>
                </div>
            </Link>
        )
    }
}