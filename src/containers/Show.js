import React, { Component } from 'react';
import Chart from '../components/Chart'

import { connect } from 'react-redux'

class Show extends Component {

    state = {
        
    }

    render() {
        console.log(this)

        return (
            <div>
                <h1>Show Container Placeholder</h1>
                <p>displays Notices Component, Chart Component, and Wonders Component</p>
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

// export default Show;
export default connect (mapStateToProps)(Show)