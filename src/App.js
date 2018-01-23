import React, { Component } from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="film-library">
          <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <FilmListing allFilms={TMDB.films}/>
          </div>

          <div className="film-details">
            <h1 className="section-title">DETAILS</h1>
            <FilmDetails allFilms={TMDB.films}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
