import React, { Component } from 'react';
import Chart from '../components/Chart'

import { connect } from 'react-redux'

class New extends Component {

    state = {
        
    }

    render() {
        console.log(this)

        return (
            <div>
                <h1>New Container Placeholder</h1>
                <p>displays chart dynamically by url and new notice/wonder form aligned to chart.id</p>
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

// export default New;
export default connect (mapStateToProps)(New)