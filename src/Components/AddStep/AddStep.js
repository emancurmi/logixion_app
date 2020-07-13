import React, { Component } from 'react';
import { rute, Link } from 'react-router-dom';
import config from '../../config';
import './AddStep.css';

export default class AddStep extends Component {

    constructor(props) {
        const query = new URLSearchParams(props.location.search);

        super(props);
        this.state = {
            config: config,
            tutorialid: query.get('tutorialid'),
            error: null
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        // get the form fields from the event
        const { element, placement, title, content, tutorialid } = e.target
        const step = {
            element: element.value,
            placement: placement.value,
            title: title.value,
            content: content.value,
            tutorialid: this.state.tutorialid
        }
        this.setState({ error: null })
        fetch(this.state.config.API_ENDPOINT + 'steps/', {
            method: 'POST',
            body: JSON.stringify(step),
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${this.state.config.API_KEY}`
            }
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => Promise.reject(error))
                }
                return res.json()
            })
            .then(data => {
                element.value = ''
                placement.value = ''
                title.value = ''
                content.value = ''
                tutorialid.value = ''
                this.context.AddStep(data)
            })
            .catch(error => {
                console.error(error)
                this.setState({ error })
            })
    }

    render() {
        return (
            <div>
                <div className="center red-strip">
                    <h1>Add Step</h1>
                    <form onSubmit={this.handleSubmit} >
                        <input type="Text" id="title" name="title" placeholder="Title" required /><br />
                        <input type="Text" id="element" name="element" placeholder="Element" required /><br />
                        <input type="Text" id="placement" name="placement" placeholder="Placement" required /><br />
                        <textarea type="Text" id="content" name="content" placeholder="Description" required /><br /><br />

                        <button id="btnSubmit" className="btn" type="submit"><span>Add Step</span></button>
                        <br />
                        <Link to={"/tourbench"}><button id="btnCancel" className="btn"><span>Cancel</span></button></Link>
                    </form>
                </div>
            </div>
        )
    }
}