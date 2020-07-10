import React from 'react';
import './TutorialsList.css';
import { Component } from 'react';
import Tutorial from '../Tutorial/Tutorial';

export default class TutorialList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            config: props.config,
            userid: 1,
            tutorials: [],
            error: null,
        }
    }

    setTutorials = tutorials => {
        this.setState({
            tutorials,
            error: null
        })
    }

    addTutorial = tutorial => {
        this.setState({
            tutorials: [...this.state.tutorials, tutorial],
        })
    }

    deleteTutorial = tutorialId => {
        const newTutorial = this.state.tutorials.filter(tutorial =>
            tutorial.id !== tutorialId
        )
        this.setState({
            tutorials: newTutorial
        })
    }

    updateTutorial = updatedTutorial => {
        this.setState({
            tutorials: this.state.tutorials.map(tutorial =>
                (tutorial.id !== updatedTutorial.id) ? tutorial : updatedTutorial
            )
        })
    }

    componentDidMount() {
        fetch(this.state.config.API_ENDPOINT + 'api/tutorials/' + '?userid=' + this.state.userid, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${this.state.config.API_KEY}`
            }
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => Promise.reject(error))
                }
                return res.json()
            })
            .then(this.setTutorials)
            .catch(error => {
                console.error(error)
                this.setState({ error })
            })
    }

    render() {

        const contextValue = {
            tutorials: this.state.tutorials,
            addTutorial: this.addTutorial,
            deleteTutorial: this.deleteTutorial,
            updateTutorial: this.updateTutorial,
        }

        const gentutoriallist = contextValue.tutorials.map((tutorial, i) => {
            return <Tutorial name={tutorial.name} id={tutorial.id} key={i} />
        })

        return (
            <div className="flexbox">
                {gentutoriallist}

                <div class="card">
                    <h3>Create New</h3>
                    <br />
                    <p>Tutorial</p>
                    <br />
                    <br />
                    <br />
                    <button id="btnCreate" className="btn"><span>Create New</span></button>

                </div>
            </div>
        )
    }
}