import React from 'react'
import './Tutorial.css'
import { Component } from 'react'

export default class Tutorial extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name
        }
    }


    render() {
        return (
            <div>
                <a href="#">{this.state.name}</a>
            </div>
        )
    }
}