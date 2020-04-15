// component provides built-in methods and attributes
import React, { Component } from 'react';

// imports custom css styling
import '../App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../containers/Home'
import New from '../containers/New'
import Show from '../containers/Show'
import DataSourceInput from '../components/DataSourceInput';

import Container from 'react-bootstrap/Container';


class App extends Component {

  render() {

    return (
      <Router >
        <Container fluid >
          <div >
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route path={`/charts/new`} component={DataSourceInput} />
            <Route path={`/charts/:id/interact`} component={New} />
            <Route path={`/charts/:id/reflections`} component={Show} />
          </div>
        </Container>
      </Router>
    );
  }
}

export default App;