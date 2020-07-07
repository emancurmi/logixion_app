import React, { Component } from 'react';
import './Tourbench.css';
import config from '../../config';

export default class Tourbench extends Component {

    state = {
        tutorials: [],
        error: null,
    };

    setTutorials = tutorials => {
        this.setState({
            tutorials,
            error: null,
        })
    }

    addTutorial = tutorial => {
        this.setState({
            tutorials: [...this.state.tutorials, tutorial],
        })
    }

    deleteTutorial = tutorialId => {
        const newTutorial = this.state.tutorials.filter(tutorial =>
            tutorial.id !== tutorialId
        )
        this.setState({
            tutorials: newTutorial
        })
    }

    componentDidMount() {
        
        fetch(config.API_ENDPOINT + 'api/tutorials', {
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
            .then(this.setTutorials)
            .catch(error => {
                console.error(error)
                this.setState({ error })
            })
    }

    updateTutorial = updatedTutorial => {
        this.setState({
            tutorials: this.state.tutorials.map(tutorial =>
                (tutorial.id !== updatedTutorial.id) ? tutorial : updatedTutorial
            )
        })
    }
    render() {
        const contextValue = {
            tutorials: this.state.tutorials,
            addTutorial: this.addTutorial,
            deleteTutorial: this.deleteTutorial,
            updateTutorial: this.updateTutorial,
        }
        return (
            <div>
                <h1>Tutorials</h1>
                {contextValue.tutorials}
            </div>
        );
    }
}

 //<TutorialsContext.Provider value={contextValue}>
                //    <Nav />
                //    <div className='content' aria-live='polite'>
                //        <Route
                //            exact
                //            path='/'
                //            component={BookmarkList}
                //        />
                //        <Route
                //            path='/add-bookmark'
                //            component={AddBookmark}
                //        />
                //        <Route
                //            path='/edit/:bookmarkId'
                //            component={EditBookmark}
                //        />
                //    </div>
                //</TutorialsContext.Provider>