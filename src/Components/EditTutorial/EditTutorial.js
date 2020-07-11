import React, { Component } from 'react';
import { rute, Link, Redirect, BrowserRouter } from 'react-router-dom';
import config from '../../config';
import './EditTutorial.css';

export default class AddTutorial extends Component {

    constructor(props) {
        const query = new URLSearchParams(props.location.search);

        super(props);
        this.state = {
            id: query.get("tutorialid"),
            name: '',
            config: config,
            userid: 1,
            error: null
        }
        console.log(this.state);
    }

    componentDidMount() {
        
        fetch(this.state.config.API_ENDPOINT + `api/tutorials/${this.state.id}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${this.state.config.API_KEY}`
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
                    name: responseData.name,
                    userid: responseData.userid
                })
            })
            .catch(error => {
                console.error(error)
                this.setState({ error })
            })
    }

    handleChangeElement = e => {
        this.setState({ name: e.target.name })
    };

    backtoTutorialList() {
        return (<Redirect link={`/tourbench`}></Redirect>);
    }

    handleSubmit = e => {
        e.preventDefault()
        const { name } = e.target
        const newToturial = { id:this.state.id, name:name.value, userid:this.state.userid }

        fetch(this.state.config.API_ENDPOINT + `api/tutorials/${this.state.id}`, {
            method: 'PATCH',
            body: JSON.stringify(newToturial),
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${config.API_KEY}`
            },
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(error => Promise.reject(error))
            })
            .then(() => {
                this.resetFields(newToturial)
                this.context.updateBookmark(newToturial)
                BrowserRouter.push('/tourbench');
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
                    <h1>Edit Tutorial {this.state.name}</h1>
                    <form onSubmit={this.handleSubmit} > 
                        <input type="Text" id="name" name="name" placeholder="Name" required /><br />
                        <button id="btnSubmit" className="btn" type="submit"><span>Save Changes</span></button>
                        <br />
                        <Link to={"/tourbench"}><button id="btnCancel" className="btn"><span>Cancel</span></button></Link>
                    </form>
                </div>
            </div>
        )
    }
}