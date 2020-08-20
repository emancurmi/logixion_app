import React from 'react';
import ReactDOM from 'react-dom';
import Tutorial from './Tutorial';
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <BrowserRouter>
            <Tutorial
                id="1"
                name="testtutorial"
                config="config"
                url="https://logixon.herokuapp.com/api/generatetutorial/1" />
        </BrowserRouter>, div
    );
    ReactDOM.unmountComponentAtNode(div);
});