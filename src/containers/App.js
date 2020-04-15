// component provides built-in methods and attributes for components, including lifecycle methods, render(), constructor()
import React, { Component } from 'react';

// imports custom css styling for App.js file
import '../App.css';

// imports BrowserRouter component which allows us to create multiple routes form the single index.html page
import { BrowserRouter as Router, Route } from 'react-router-dom';

// enables these local container/component files to be rendered through the routing options
import NavBar from '../components/NavBar';
import Home from '../containers/Home'
import New from '../containers/New'
import Show from '../containers/Show'
import DataSourceInput from '../components/DataSourceInput';

// imports react-bootstrap container, which is set as fluid to be responsive
import Container from 'react-bootstrap/Container';

// The container and navbar will be rendered on every page, while the other components are rendered based on the url
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