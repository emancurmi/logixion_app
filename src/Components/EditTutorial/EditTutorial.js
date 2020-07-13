import React, { Component } from 'react';
import { rute, Link, Redirect, BrowserRouter } from 'react-router-dom';
import config from '../../config';
import './EditTutorial.css';


export default class EditTutorial extends Component {

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
    }

    componentDidMount() {
        
        fetch(this.state.config.API_ENDPOINT + `tutorials/${this.state.id}`, {
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

    handleChangeName = e => {
        this.setState({ name: e.target.value })
    };

    backtoTutorialList = () => {
        return <Redirect from='/edittutorial/' to="/tourbench/" />;
    }

    handleSubmit = e => {
        e.preventDefault()
        const newToturial = { id: this.state.id, name: this.state.name, userid: this.state.userid }

        fetch(this.state.config.API_ENDPOINT + `tutorials/${this.state.id}`, {
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
                this.props.history.push("/tourbench")
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
                        <input type="Text" id="name" name="name" placeholder="Name" pattern="[A-Za-z]+" title="Tutorial name should be made up of Capital and small letters and No Spaces e.g. DefaultTour" onChange={this.handleChangeName} required /><br />
                        <button id="btnSubmit" className="btn" type="submit"><span>Save Changes</span></button>
                        <br />
                        <Link to={"/tourbench"}><button id="btnCancel" className="btn"><span>Back to List</span></button></Link>
                    </form>
                </div>
            </div>
        )
    }
}