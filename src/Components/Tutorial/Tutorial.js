import React, { Component } from 'react';
import './Tutorial.css';
import { rute, Link } from 'react-router-dom';

export default class Tutorial extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name,
            config: props.config,
            url: "http://logixon.herokuapp.com/api/generatetutorial/" + props.id
        }
    }

    deleteTutorialRequest = (tutorialId) => {
        fetch(this.state.config.API_ENDPOINT + `tutorials/${tutorialId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${this.state.config.API_KEY}`
            }
        })
            .then(data => {
                this.props.context.deleteTutorial(tutorialId)
            })
            .catch(error => {
                console.error(error)
            })
    }

    render() {
        return (
            <div className="card">
                <h3>{this.state.name}</h3>
                <p><a href={this.state.url} target="_blank">Url</a></p>
                <br />
                <Link to={`../stepslist/?tutorialid=${this.state.id}&tutorialname=${this.state.name}`}><button id="btnSteps" className="btn"><span>Edit Steps</span></button></Link>
                <br />
                <Link to={`../edittutorial?tutorialid=${this.state.id}`}><button id="btnEdit" className="btn"><span>Edit Name</span></button></Link>
                <br />
                <button id="btnDelete" className="btn" onClick={() => {this.deleteTutorialRequest(this.state.id) }}><span>Delete</span></button>
            </div>
        )
    }
}