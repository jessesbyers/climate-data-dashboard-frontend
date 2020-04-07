// import React from 'react';
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount() {
  // test fetch from rails api

    fetch(`http://localhost:3000/charts`)
    .then(response => response.json())
    .then(json => console.log(json))

  // test fetch from external api
    fetch('https://www.ncdc.noaa.gov/cag/national/time-series/110-tavg-12-12-1895-2020.json?base_prd=true&begbaseyear=1930&endbaseyear=2000')
    .then(response => response.json())
    .then(json => console.log(json))
  }

  render() {
    return (
      <div className="App">
      App

      </div>
    );
  }
}

export default App;
