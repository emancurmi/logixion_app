import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Components/Home/Home';
import Tourbench from './Components/Tourbench/Tourbench';
import StepsList from './Components/StepsList/StepsList';

import EditStep from './Components/EditStep/EditStep';
import EditTutorial from './Components/EditTutorial/EditTutorial';


import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';

import './App.css';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Nav />
                <div className='App'>
                    <Route path="/" component={Home} exact />
                    <Route path="/tourbench/" component={Tourbench} />

                    <Route path="/stepslist/" component={StepsList} />
                    <Route path="/editstep" component={EditStep} />
                    <Route path="/edittutorial" component={EditTutorial} />
                </div>
                <Footer/>
            </BrowserRouter>
        );
    }
}

export default App;