import React, { Component } from 'react';
import Chart from '../components/Chart'
import Notices from '../components/Notices'
import Wonders from '../components/Wonders'
import { NavLink } from 'react-router-dom';


import { connect } from 'react-redux'

class Show extends Component {

    render() {
        console.log(this.props)
        const chart = this.props.charts.find(chart => {return chart.id === this.props.match.params.id})
        console.log(chart)

        if (chart) {

            return (
                <div>
                    <Chart url={chart.screenshot_url}/>

                    <NavLink 
                        to={`/charts/${chart.id}/interact`}
                    >
                        Interact
                    </NavLink>


                    <Notices chart={chart}/>
                    <Wonders chart={chart}/>
                
                </div>
            );
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
    }
};

// need to revise to only pass down what is needed
const mapStateToProps = state => {
    return {
      charts: state.charts
    }
  }

export default connect (mapStateToProps)(Show)