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

    handleSubmit = e => {
        e.preventDefault()
        // get the form fields from the event
        const {  name, userid } = e.target
        const step = {
            
            name: name.value,
            userid: this.state.userid
        }
        this.setState({ error: null })
        fetch(this.state.config.API_ENDPOINT + 'tutorials/', {
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
                name.value = ''
                userid.value = ''
                this.context.AddTutorial(data)

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
                    <h1>Add Tutorial</h1>
                    <form onSubmit={this.handleSubmit} > 
                        <input type="Text" id="name" name="name" placeholder="Name" required /><br />
                        <button id="btnSubmit" className="btn" type="submit"><span>Add Tutorial</span></button>
                        <br />
                        <Link to={"/tourbench"}><button id="btnCancel" className="btn"><span>Back to List</span></button></Link>
                    </form>
                </div>
            </div>
        )
    }
}