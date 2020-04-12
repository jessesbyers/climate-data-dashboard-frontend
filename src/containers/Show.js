import React, { Component } from 'react';
import Chart from '../components/Chart'
import Notices from '../components/Notices'
import Wonders from '../components/Wonders'
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux'

class Show extends Component {

    render() {
        console.log(this)
        const chart = this.props.state.charts.find(chart => {return chart.id === parseInt(this.props.match.params.id)})
        const notices = this.props.state.notices.filter(notice => notice.chart_id === chart.id)
        const wonders = this.props.state.wonders.filter(wonder => wonder.chart_id === chart.id)


        if (chart) {

            return (
                <div>
                    <Chart url={chart.screenshot_url}/>

                    <NavLink 
                        to={`/charts/${chart.id}/interact`}
                    >
                        Interact
                    </NavLink>           

                    <Notices chart={chart} notices={notices} />
                    <Wonders chart={chart} wonders={wonders} />
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
      state
    }
  }

export default connect (mapStateToProps)(Show)