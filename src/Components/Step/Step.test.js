import React from 'react';
import ReactDOM from 'react-dom';
import Step from './Step';
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <BrowserRouter>
            <Step
            id="1"
            config="config"
            element=".test"
            placement="top"
            title="TEST"
            content="This is a test step"
            key="1" />
        </BrowserRouter>, div
    );
    ReactDOM.unmountComponentAtNode(div);
});