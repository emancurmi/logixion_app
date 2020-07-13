import React, { Component } from 'react';
import './StepsList.css';
import config from '../../config';
import { rute, Link } from 'react-router-dom';
import Step from '../Step/Step';
import Loader from '../Loader/Loader';

export default class StepsList extends Component {

    constructor(props) {
        const query = new URLSearchParams(props.location.search);

        super(props);

        this.state = {
            config: config,
            tutorialid: query.get('tutorialid'),
            tutorialname: query.get('tutorialname'),
            steps: [],
            error: null,
            isLoading: true
        }
    }

    setSteps = steps => {
        this.setState({
            steps,
            error: null,
            isLoading: false
        })
    }

    addStep = step => {
        this.setState({
            steps: [...this.state.steps, step],
        })
    }

    deleteStep = (stepid) => {
        this.setState({ isLoading: true });

        const newSteps = [...this.state.steps];
        let index = -1;
        for (let i = 0; i < this.state.steps.length; i++) {
            if (this.state.steps[i].id === stepid) {

                index = i;
            }
        }
        if (index > -1) {
            newSteps.splice(index, 1);
        }
        this.setSteps(newSteps);
    }

    updateStep = updatedStep => {
        this.setState({
            steps: this.state.steps.map(step =>
                (step.id !== updatedStep.id) ? step : updatedStep
            )
        })
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
                placement.value = 'bottom'
                title.value = ''
                content.value = ''
                this.addStep(data)
                this.setSteps(this.state.steps)
            })
            .catch(error => {
                console.error(error)
                this.setState({ error })
            })
    }

    fetch = () => {
        fetch(this.state.config.API_ENDPOINT + 'steps/' + '?tutorialid=' + this.state.tutorialid, {
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
            .then(this.setSteps)
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
                <Loader loadingtype={"Steps"} />
            );
        }

        const contextValue = {
            steps: this.state.steps,
            addStep: this.addStep,
            deleteStep: this.deleteStep,
            updateStep: this.updateStep,
        }

        const gensteplist = contextValue.steps.map((step, i) => {
            return <Step id={step.id} context={contextValue} config={this.state.config} element={step.element} placement={step.placement} title={step.title} content={step.content} key={i} />
        })

        return (
            <div>
                <h1>Steps in {this.state.tutorialname}</h1>
                <div className="flexbox">
                    {gensteplist}
                    <div className="card">
                        <h3>Add Step</h3>
                        <form onSubmit={this.handleSubmit} >
                            <input type="Text" id="title" name="title" placeholder="Title" autoFocus required /><br />
                            <input type="Text" id="element" name="element" placeholder="Element" pattern=".[a-z]+|.[a-z]+-[a-z]+" title="Element should start with a . only contain lowercase letters and one - e.g. .tourfile .tour-file" required /><br />
                            <select id="placement" name="placement">
                                <option value="top">Top</option>
                                <option value="right">Right</option>
                                <option value="bottom" defaultValue>Bottom</option>
                                <option value="left">Left</option>
                            </select>
                            <textarea type="Text" id="content" name="content" placeholder="Description" required /><br /><br />

                            <button id="btnSubmit" className="btn" type="submit"><span>Add Step</span></button>
                        </form>
                    </div>
                </div>
                <br />
                <Link to={"/tourbench"}><button id="btnBack" className="btn"><span>Back to Tutorial List</span></button></Link>
            </div>
        )
    }
}