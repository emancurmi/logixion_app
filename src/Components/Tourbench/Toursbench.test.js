import React from 'react';
import ReactDOM from 'react-dom';
import Tourbench from './Tourbench';
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
            <Tourbench />, div
    );
    ReactDOM.unmountComponentAtNode(div);
});