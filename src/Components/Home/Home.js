import React, { Component } from 'react';
import './Home.css';
import digital from './images/digital.png';

export default class Home extends Component {
    render() {
        return (

            <div className="center">
                <header>Logi</header>
                <header className="red">X</header>
                <header>On</header>
                <br />
                <h1>Design Your Tutorial</h1>

                <p><strong>LogixOn</strong> is an app developed to generate form tutorials quick and easy</p>
                <p>Due to the high pressure to convert paper forms to digital forms, users sometimes find it hard to understand how to fill them.
                An easy way for the developers to help solve this problem is to create a tutorial for the forms and guide them to fill in the information.
                    At the moment, this solution results in a high volume of extra work for the developers and higher prices for the users.</p>
                <p>LogixOn gives developers an easy way to reduce the time required to develop these high-quality tutorials.</p>
                <br />

                <img src={digital} alt="sell diagram" />

                <h2>How to Use</h2>
                <p>Currently, this app is to be used by developers who are creating forms on a website. We are currently developing a more user-friendly way for users to use it on their own.</p>
                <ul>
                    <li>The first step is to make a list of all the ids of input and button fields that you would like to put in the tutorial.</li>
                    <li>Click on Tour Bench to Start.</li>
                    <li>Enter the Tutorial Name and Click Add Tutorial.</li>
                    <li>Click Edit Steps to start Creating Steps.</li>
                    <li>Start adding the steps one after the other.</li>
                    <li>Title - Will show as the header of the tooltip.</li>
                    <li>Element - is the element id from your form.</li>
                    <li>Position - is the position you would like the tooltip to show.</li>
                    <li>Description - describe what the user should do in this step.</li>
                    <li>When done, import the URL of the tutorial into your site.</li>
                    <li>Your form now features a tutorial to help users fill it in.</li>
                </ul>
            </div>
        )
    }
}