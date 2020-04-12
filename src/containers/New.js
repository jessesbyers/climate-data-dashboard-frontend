import React, { Component } from 'react';
import Chart from '../components/Chart'
import ChartInput from '../components/ChartInput'
import { NavLink } from 'react-router-dom';


import { connect } from 'react-redux'

class New extends Component {

    render() {
        console.log(this)

        const chart = this.props.state.charts.find(chart => {return chart.id === parseInt(this.props.match.params.id)})
    
        if (chart) {
            return (
                    <div>
                        <Chart url={chart.screenshot_url}/>
                        <ChartInput chart_id={chart.id}/>

                        <NavLink 
                            to={`/charts/${chart.id}/reflections`}
                        >
                            Reflections
                        </NavLink>
                    </div>
            )

            } else {
                return (
                    <div>
                        <NavLink 
                            style={{ marginRight: '10px' }} 
                            to="/"
                        >
                            <h1>Set Up a Data Dashboard to Get Started</h1>
                            <h3>Click Here</h3>
                        </NavLink>
                    </div>
                )
}
        // );
    }
};

// need to revise to only pass down what is needed
const mapStateToProps = state => {
    console.log(state)
    return {
      state
    }
  }

export default connect (mapStateToProps)(New)