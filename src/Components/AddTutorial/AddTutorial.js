import React, { Component } from 'react';
import './AddTutorial.css';

export default class AddTutorial extends Component {
    render() {
        return (
            <div>
                <div className="center red-strip">
                    <h1>Add Step</h1>
                    <form>
                        <input type="Text" placeholder="Title" required /><br />
                        <button id="btnSubmit" className="btn"><span>Add Tutorial</span></button>
                    </form>
                </div>
            </div>
        )
    }
}