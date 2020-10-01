import React from 'react';
import ReactDOM from 'react-dom';
import EditTutorial from './EditTutorial';
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <BrowserRouter URLSearchParams="?stepid=1">
            <EditTutorial
                id= "1"
                name= "Test Tutorial"
                userid="1"
                key="1"
                location={{ search: "" }}
            />
        </BrowserRouter>, div
    );
    ReactDOM.unmountComponentAtNode(div);
});