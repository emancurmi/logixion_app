import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import config from './config';

import Home from './Components/Home/Home';
import About from './Components/About/About';
import Tourbench from './Components/Tourbench/Tourbench';
import StepsList from './Components/StepsList/StepsList';

import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

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
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/tourbench/" component={Tourbench} />
                    <Route path="/stepslist/" component={StepsList} />
                    <Route path="/about" component={About} />
                </div>
                <Footer/>
            </BrowserRouter>
        );
    }
}

export default App;