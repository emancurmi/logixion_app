import React from 'react';
import './StepsList.css';
import { Component } from 'react';
import config from '../../config';
import Step from '../Step/Step';

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
        }
    }

    setSteps = steps => {
        this.setState({
            steps,
            error: null
        })
    }

    addSteps = step => {
        this.setState({
            steps: [...this.state.steps, step],
        })
    }

    deleteStep = stepid => {
        const newStep = this.state.steps.filter(step =>
            step.id !== stepid
        )
        this.setState({
            steps: newStep
        })
    }

    updateStep = updatedStep => {
        this.setState({
            steps: this.state.steps.map(step =>
                (step.id !== updatedStep.id) ? step : updatedStep
            )
        })
    }

    componentDidMount() {
        console.log(this.state.config.API_ENDPOINT + 'api/steps/' + '?tutorialid =' + this.state.tutorialid);
        fetch(this.state.config.API_ENDPOINT + 'api/steps/' + '?tutorialid=' + this.state.tutorialid, {
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

    render() {

        const contextValue = {
            steps: this.state.steps,
            addStep: this.addStep,
            deleteStep: this.deleteStep,
            updateStep: this.updateStep,
        }

        const gensteplist = contextValue.steps.map((step, i) => {
            return <Step id={step.id} element={step.element} placement={step.placement} title={step.title} content={step.content} key={i} />
        })

        return (
            <div>
                <h1>Steps in </h1>
                <div className="flexbox">
                    {gensteplist}
                </div>
            </div>
        )
    }
}