import React from 'react';
import ReactDOM from 'react-dom';
import EditStep from './EditStep';
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
    const div = document.createElement('div');
    
    ReactDOM.render(
        <BrowserRouter URLSearchParams="?stepid=1"> 
            <EditStep
                id= "1"
                element= "test"
                placement= "top"
                title="Test Title"
                content= "this is a test"
                tutorialid="1"
                key="1" />
        </BrowserRouter>, div
    );
    ReactDOM.unmountComponentAtNode(div);
});