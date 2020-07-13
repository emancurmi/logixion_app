import React from 'react';
import './TutorialsList.css';
import { Component } from 'react';
import { rute, Link } from 'react-router-dom';
import Tutorial from '../Tutorial/Tutorial';
import Loader from '../Loader/Loader';

export default class TutorialList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            config: props.config,
            userid: 1,
            tutorials: [],
            error: null,
            isLoading: true
        }
    }

    setTutorials = tutorials => {
        this.setState({
            tutorials,
            error: null,
            isLoading: false
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
        fetch(this.state.config.API_ENDPOINT + 'tutorials/' + '?userid=' + this.state.userid, {
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

        if (this.state.isLoading) {
            return (
                <Loader loadingtype={"Tutorials"}/>
            );
        }

        const contextValue = {
            tutorials: this.state.tutorials,
            addTutorial: this.addTutorial,
            deleteTutorial: this.deleteTutorial,
            updateTutorial: this.updateTutorial,
        }

        const gentutoriallist = contextValue.tutorials.map((tutorial, i) => {
            return <Tutorial name={tutorial.name} context={contextValue} id={tutorial.id} key={i} />
        })

        return (
            <div className="flexbox">
                {gentutoriallist}
                
                <div className="card">
                    <h3>Create New Tutorial</h3>
                    <br /><br />
                    <br /><br />
                    <Link to={"/addtutorial"}><button id="btnCreate" className="btn"><span>Start</span></button></Link>

                    </div>
            </div>
        )
    }
}