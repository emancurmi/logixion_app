import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import config from './config';

import Home from './Components/Home/Home';
import About from './Components/About/About';
import Tourbench from './Components/Tourbench/Tourbench';

import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';

import './App.css';

class App extends Component {
    state = {
        bookmarks: [],
        error: null,
    };

    componentDidMount() {
        fetch(config.API_ENDPOINT, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`
            }
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => Promise.reject(error))
                }
                return res.json()
            })
            .then(this.setBookmarks)
            .catch(error => {
                console.error(error)
                this.setState({ error })
            })
    }

    render() {
        return (
            <BrowserRouter>
                <Header />
                <Nav />
                <div className='App'>
                    <Route path="/" component={Home} exact />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/tourbench/:userid" component={Tourbench} />
                    <Route path="/about" component={About} />
                </div>
                <Footer/>
            </BrowserRouter>
        );
    }
}

export default App;