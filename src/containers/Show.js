import React, { Component } from 'react';
import Chart from '../components/Chart'
import Notices from '../components/Notices'
import Wonders from '../components/Wonders'


import { connect } from 'react-redux'

class Show extends Component {

    // state = {
        
    // }

    render() {
        console.log(this.props)
        const chart = this.props.charts.find(chart => {return chart.id === this.props.match.params.id})
        console.log(chart)

        return (
            <div>
                <h1>Show Container Placeholder</h1>
                <p>displays Notices Component, Chart Component, and Wonders Component</p>
                <Chart url={chart.attributes.screenshot_url}/>

                <Notices chart={chart}/>
                <Wonders chart={chart}/>
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