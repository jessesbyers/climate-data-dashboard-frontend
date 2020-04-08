import React, { Component } from 'react';
import Chart from '../components/Chart'
import ChartInput from '../components/ChartInput'


import { connect } from 'react-redux'

class New extends Component {

    state = {
        
    }

    render() {
        const chart_url = this.props.charts.find(chart => {return chart.id === this.props.match.params.id})
        return (
            <div>
                <h1>New Container Placeholder</h1>
                <p>displays chart dynamically by url and new notice/wonder form aligned to chart.id</p>
                <Chart url={chart_url.attributes.screenshot_url}/>
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