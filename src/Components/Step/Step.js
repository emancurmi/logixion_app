import React from 'react'
import './Step.css'
import { Component } from 'react'
import config from '../../config';
import { rute, Link } from 'react-router-dom';

//function deleteStepRequest(stepId, cb) {
//    fetch(config.API_ENDPOINT + `/api/steps/${stepId}`, {
//        method: 'DELETE',
//        headers: {
//            'content-type': 'application/json',
//            'authorization': `bearer ${config.API_KEY}`
//        }
//    })
//        .then(res => {
//            if (!res.ok) {
//                return res.json().then(error => Promise.reject(error))
//            }
//            return res.json()
//        })
//        .then(data => {
//            cb(stepId)
//        })
//        .catch(error => {
//            console.error(error)
//        })
//}

export default class Step extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            element: props.element,
            placement: props.placement,
            title: props.title,
            content: props.content
        }
    }


    render() {
        return (

            
            <div class="card">
                <h3>{this.state.title}</h3>
                <p class="price">{this.state.element}</p>
                <p class="price">{this.state.placement}</p>
                <p>{this.state.content}</p>
                <br />
                <Link to={`/editstep?stepid=${this.state.id}`}>
                    <button id="btnEdit" className="btn"><span>Edit</span></button></Link>
                <br />
                <button id="btnDelete" className="btn"
                    //onClick={() =>
                    //    deleteStepRequest(props.id, context.deleteStep)
                    //}
                ><span>Delete</span></button>
                </div>
        )
    }
}