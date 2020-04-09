import React, { Component } from 'react';
import Chart from '../components/Chart'
import ChartInput from '../components/ChartInput'
import { NavLink } from 'react-router-dom';


import { connect } from 'react-redux'

class New extends Component {

    render() {
        console.log("rendering New component")
        console.log(this.props)
        const chart = this.props.charts.find(chart => {return chart.id === this.props.match.params.id})
        return (
            <div>
                <Chart url={chart.screenshot_url}/>
                <ChartInput chart_id={chart.id}/>

                <NavLink 
                    style={{ marginRight: '10px' }} 
                    to={`/charts/${chart.id}/reflections`}
                    url={this.props.url}
                >
                    Reflections
                </NavLink>
            </div>
        );
    }
};

// need to revise to only pass down what is needed
const mapStateToProps = state => {
    console.log(state)
    return {
      charts: state.charts
    }
  }

export default connect (mapStateToProps)(New)