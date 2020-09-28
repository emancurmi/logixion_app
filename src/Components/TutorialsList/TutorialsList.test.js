import React from 'react';
import ReactDOM from 'react-dom';
import TutorialsList from './TutorialsList';
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <BrowserRouter>
            <TutorialsList
                userid="1"
                tutorials="[]"
                key="1" />
        </BrowserRouter>, div
    );
    ReactDOM.unmountComponentAtNode(div);
});