import React from 'react';
import './StepsList.css';
import { Component } from 'react';
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
        
    }

    updateStep = updatedStep => {
        this.setState({
            steps: this.state.steps.map(step =>
                (step.id !== updatedStep.id) ? step : updatedStep
            )
        })
    }

    componentDidMount() {
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
            return <Step id={step.id} context={contextValue} element={step.element} placement={step.placement} title={step.title} content={step.content} key={i} />
        })

        return (
            <div>
                <h1>Steps in {this.state.tutorialname}</h1>
                <div className="flexbox">
                    {gensteplist}

                    <div className="card">
                        <h3>Create New Step</h3>
                        <br />
                        <br />
                        <Link to={`/addstep?tutorialid=${this.state.tutorialid}`}>
                            <button id="btnCreate" className="btn">
                                <span>Start</span>
                            </button>
                        </Link>
                    </div>

                </div>
                <br />
                <Link to={"/tourbench"}><button id="btnBack" className="btn"><span>Back to Tutorial List</span></button></Link>
            </div>
        )
    }
}