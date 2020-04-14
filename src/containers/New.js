import React, { Component } from 'react';
import Chart from '../components/Chart'
import ChartInput from '../components/ChartInput'
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



import { connect } from 'react-redux'

class New extends Component {

    render() {

        const chart = this.props.charts.find(chart => {return chart.id === parseInt(this.props.match.params.id)})
    
        if (chart) {
            return (
                <div>
                    <Chart chart={chart}/>
                    <ChartInput chart_id={chart.id}/>
                </div>
            )

        } else {
            return (
                <div>
                    <NavLink 
                        style={{ marginRight: '10px' }} 
                        to="/">
                        <Button>Set Up a Data Dashboard to Get Started</Button>
                    </NavLink>
                </div>
            )
        }
    }
};

const mapStateToProps = state => {
    console.log(state)
    return {
      charts: state.charts
    }
  }

export default connect (mapStateToProps)(New)