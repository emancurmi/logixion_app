import React from 'react'
import './Step.css'
import { Component } from 'react'


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
                <button id="btnEdit" className="btn"><span>Edit</span></button>
                <br />
                <button id="btnDelete" className="btn"><span>Delete</span></button>
                </div>
        )
    }
}