import React, { Component } from 'react';
import './AddStep.css';

export default class AddStep extends Component {
    render() {
        return (
            <div>
                <div className="center red-strip">
                    <h1>Add Step</h1>
                    <form>
                        <input type="Text" placeholder="Title" required /><br />
                        <input type="Text" placeholder="Element" required /><br />
                        <input type="Text" placeholder="Placement" required /><br />
                        <input type="Text" placeholder="Description" required /><br/><br/>
                        <button id="btnSubmit" className="btn"><span>Add Step</span></button>
                    </form>
                </div>
            </div>
        )
    }
}