import React, { Component } from 'react';
import Chart from '../components/Chart'
import Notices from '../components/Notices'
import Wonders from '../components/Wonders'


import { connect } from 'react-redux'

class Show extends Component {

    // state = {
        
    // }

    render() {
        const chart_url = this.props.charts.find(chart => {return chart.id === this.props.match.params.id})

        return (
            <div>
                <h1>Show Container Placeholder</h1>
                <p>displays Notices Component, Chart Component, and Wonders Component</p>
                <Chart url={chart_url.attributes.screenshot_url}/>

                <Notices />
                <Wonders />
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