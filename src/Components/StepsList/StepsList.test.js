import React from 'react';
import ReactDOM from 'react-dom';
import StepsList from './StepsList';
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <BrowserRouter URLSearchParams="?stepid=1">
            <StepsList
                tutorialid= "1"
                tutorialname= "this is a test"
                steps= "[]"
                key="1" />
        </BrowserRouter>, div
    );
    ReactDOM.unmountComponentAtNode(div);
});