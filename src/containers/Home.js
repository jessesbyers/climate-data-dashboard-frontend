import React, { Component } from 'react';
import Chart from '../components/Chart'

import { connect } from 'react-redux'

class Home extends Component {

    // get rid of state once store data is ready
    state = {
        urls: ["https://i.imgur.com/0CcaR6K.png", "https://i.imgur.com/hvyjE6g.png", "https://i.imgur.com/nBfhBVX.png"]
    }

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
        console.log(this)

        return (
            <div>
                <h1>Home Container Placeholder</h1>
                <p>loops through urls from state and renders chart component for each url</p>
                {this.state.urls.map((url, index) => <Chart url={url} key={index} />)}
            </div>
        );
    }
};

// need to revise to only pass down what is needed
const mapStateToProps = state => {
    return state
    // return {
    //   items: state.items
    // }
  }

// export default Home;
export default connect (mapStateToProps)(Home)