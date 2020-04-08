import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../containers/Home'
import New from '../containers/New'
import Show from '../containers/Show'


class App extends Component {

  render() {
    
    return (
      <Router>
      <div>
        <NavBar />
        {/* need to revise paths to be dynamic by chart id with nested routes */}
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/new" component={New} /> */}

        <Route path={`/charts/:id/interact`} component={New} />
        <Route exact path="/show" component={Show} />
      </div>
    </Router>
    );
  }
}

export default App;