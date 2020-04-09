import React, { Component } from 'react';
import Chart from '../components/Chart'
import ChartInput from '../components/ChartInput'


import { connect } from 'react-redux'

class New extends Component {

    state = {
        
    }

    render() {
        const chart = this.props.charts.find(chart => {return chart.id === this.props.match.params.id})
        return (
            <div>
                <Chart url={chart.attributes.screenshot_url}/>
                <ChartInput />
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