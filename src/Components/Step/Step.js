import React, { Component } from 'react'
import './Step.css'
import { rute, Link, Redirect } from 'react-router-dom';


export default class Step extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            element: props.element,
            placement: props.placement,
            title: props.title,
            content: props.content,
            config: props.config,
            context: props.context
        }
    }

    deleteStepRequest = (stepId) => {
        fetch(this.state.config.API_ENDPOINT + `steps/${stepId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${this.state.config.API_TOKEN}`
            }
        })
            .then(data => {
                if (data.status == 204) {
                    this.state.context.deleteStep(stepId);
                }
            })
            .catch(error => {
                console.error(error)
            })
    }

    render() {
        return (
            <div className="card">
                <h3>{this.state.title}</h3>
                <p className="price">{this.state.element}</p>
                <p className="price">{this.state.placement}</p>
                <p>{this.state.content}</p>
                <br />
                <Link to={`/editstep?stepid=${this.state.id}`}>
                    <button id="btnEdit" className="btn">
                        <span>Edit</span>
                    </button>
                </Link>
                <br />
                <button id="btnDelete" className="btn" onClick={() => { this.deleteStepRequest(this.state.id) }}>
                    <span>Delete</span>
                </button>
            </div>
        )
    }
}