import React, { Component } from 'react';
import { rute, Router, Link } from 'react-router-dom';
import config from '../../config';
import './EditStep.css';


export default class EditStep extends Component {

    constructor(props) {

        const query = new URLSearchParams(props.location.search);

        super(props);
        this.state = {
            error: null,
            id: query.get('stepid'),
            element: '',
            placement: '',
            title: '',
            content: '',
            config: config,
            tutorialid: '',
            error: null
        }
    }

    componentDidMount() {
        fetch(this.state.config.API_ENDPOINT + `steps/${this.state.id}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${this.state.config.API_TOKEN}`
            }
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(error => Promise.reject(error))
                return res.json()
            })
            .then(responseData => {
                this.setState({
                    id: responseData.id,
                    element: responseData.element,
                    placement: responseData.placement,
                    title: responseData.title,
                    content: responseData.content,
                })
            })
            .catch(error => {
                console.error(error)
                this.setState({ error })
            })
    }

    handleChangeElement = e => {
        this.setState({ element: e.target.value })
    };

    handleChangePlacement = e => {
        this.setState({ placement: e.target.value })
    };

    handleChangeTitle = e => {
        this.setState({ title: e.target.value })
    };

    handleChangeContent = e => {
        this.setState({ content: e.target.value })
    };

    handleSubmit = e => {
        e.preventDefault()

        const newStep = {
            id: this.state.id,
            element: this.state.element,
            placement: this.state.placement,
            title: this.state.title,
            content: this.state.content,
            tutorialid: this.state.tutorialid
        }

        fetch(this.state.config.API_ENDPOINT + `steps/${this.state.id}`, {
            method: 'PATCH',
            body: JSON.stringify(newStep),
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${config.API_TOKEN}`
            },
            
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(error => Promise.reject(error))
            })
            .then(() => {
               // sessionStorage.get('redirectpath') ? this.props.history.push("/" + sessionStorage.get('redirectpath')) : this.props.history.push("/tourbench");
                this.props.history.goBack();
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
                    <h1>Edit Step {this.state.title}</h1>
                    <form onSubmit={this.handleSubmit} >
                        <input type="Text" id="title" name="title" defaultValue={this.state.title} onChange={this.handleChangeTitle} required /><br />
                        <input type="Text" id="element" name="element" defaultValue={this.state.element} pattern=".[a-z]+|.[a-z]+-[a-z]+" title="Element should start with a . only contain lowercase letters and one - e.g. .tourfile .tour-file" onChange={this.handleChangeElement} required /><br />
                        <select id="placement" name="placement" onChange={this.handleChangePlacement}>
                            <option value="top">Top</option>
                            <option value="right">Right</option>
                            <option value="bottom" defaultValue>Bottom</option>
                            <option value="left">Left</option>
                        </select><br />
                        <textarea type="Text" id="content" name="content" defaultValue={this.state.content} placeholder="Description" onChange={this.handleChangeContent} required /><br /><br />
                        
                        <button id="btnSubmit" className="btn" type="submit"><span>Save Changes</span></button>
                        <br />
                        <Link to={"/tourbench"}><button id="btnCancel" className="btn"><span>Cancel</span></button></Link>
                    </form>
                </div>
            </div>
        )
    }
}