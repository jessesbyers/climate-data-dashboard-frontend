import React, { Component } from 'react';
import Chart from '../components/Chart'
import Notices from '../components/Notices'
import Wonders from '../components/Wonders'
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux'

class Show extends Component {

    render() {
        console.log(this)
        const chart = this.props.charts.find(chart => {return chart.id === parseInt(this.props.match.params.id)})
        const notices = this.props.notices.filter(notice => notice.chart_id === chart.id)
        const wonders = this.props.wonders.filter(wonder => wonder.chart_id === chart.id)

        if (chart) {

            return (
                <div>
                    <Chart chart={chart}/>


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

const mapStateToProps = state => {
    return {
      charts: state.charts, 
      notices: state.notices, 
      wonders: state.wonders
    }
  }

export default connect (mapStateToProps)(Show)