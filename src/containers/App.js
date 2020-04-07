import React, { Component } from 'react';
// import '../App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../containers/Home'


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
      <Router>
      <div>
        <NavBar />
        {/* <Route exact path="/" render={() => <div>Home Container</div>} /> */}
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/new" component={New} />
        <Route exact path="/show" component={Show} /> */}
      </div>
    </Router>
    );
  }
}

export default App;
