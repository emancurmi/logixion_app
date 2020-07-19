import React, { Component } from 'react';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div>
                <p><strong>LogixOn</strong> is an app that is used to generate form tutorials quick and easy</p>
                <p>Due to the high pressure to convert paper forms to digital forms users sometimes find it hard to understand what is required of them. An easy way for the developers to help is to create a tutorial for the form and guide the users fill in the information but that results in high volume of extra work for the developers and higher prices for the users.</p>
                <p>This app will help decrease some of the time</p>
                <h2>How to Use</h2>
                <p>Currently this app is to be used by developers who are creating a forms on a website. We are currently developing a more user friendly for users to be able to use it on their own.</p>
                <ol>
                    <li>first step is to make a list of all the ids of input and button fields that you would like to put in the tutorial</li>
                    <li>register or login on this site</li>
                    <li>Create a new tutorial</li>
                    <li>Start adding the steps one after the other</li>
                    <li>Title - Will show as header of the tooltip</li>
                    <li>Element - is the element id from your form</li>
                    <li>Position - is the position you would like the tooltip to show.</li>
                    <li>Description - describe what that field is for</li>
                    <li>When done inport the url of the tutorial in your site</li>
                    <li>Your form now features a tutorial to help users fill it in</li>

                    </ol>
            </div>
        )
    }
}