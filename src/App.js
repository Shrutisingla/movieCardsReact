import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieNameComponent from './MovieName';

class App extends Component {
  render(){
    return (
      <div className="App">
          <MovieNameComponent displaytext="Must Watch Movies" />
      </div>
    );
  }

}

export default App;
