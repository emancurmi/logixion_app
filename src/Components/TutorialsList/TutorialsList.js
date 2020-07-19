import React, { Component } from 'react';
import './TutorialsList.css';
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
        
        console.log("state tutrials " + this.state.tutorials);
    }

    addTutorial = tutorial => {
        this.setState({
            tutorials: [...this.state.tutorials, tutorial],
        })
    }

    deleteTutorial = tutorialId => {
        this.setState({ isLoading: true });

        const newTutorials = [...this.state.tutorials];
        let index = -1;
        for (let i = 0; i < this.state.tutorials.length; i++) {
            if (this.state.tutorials[i].id == tutorialId) {
                
                index = i;
            }
        }
        if (index > -1) {
            newTutorials.splice(index, 1);
        }
        this.setTutorials(newTutorials);
    }

    updateTutorial = updatedTutorial => {
        this.setState({
            tutorials: this.state.tutorials.map(tutorial =>
                (tutorial.id !== updatedTutorial.id) ? tutorial : updatedTutorial
            )
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { name, userid } = e.target
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
                'authorization': `bearer ${this.state.config.API_TOKEN}`
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
                this.addTutorial(data)
                this.setTutorials(this.state.tutorials)

            })
            .catch(error => {
                console.error(error)
                this.setState({ error })
            })
    }

    fetch = () => {
        fetch(this.state.config.API_ENDPOINT + 'tutorials/' + '?userid=' + this.state.userid, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${this.state.config.API_TOKEN}`
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

    componentDidMount() {
        this.fetch();
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
            return <Tutorial name={tutorial.name} config={this.state.config} context={contextValue} id={tutorial.id} key={i} />
        })

        return (
            <div className="flexbox">
                {gentutoriallist}
                
                <div className="card">
                    <h1>Add Tutorial</h1>
                    <form onSubmit={this.handleSubmit} >
                        <input type="Text" id="name" name="name" placeholder="Name" pattern="[A-Za-z]+" title="Tutorial name should be made up of Capital and small letters Onlin e.g. DefaultTour " required /><br />
                        <button id="btnSubmit" className="btn" type="submit"><span>Add Tutorial</span></button>
                    </form>
                </div>
            </div>
        )
    }
}