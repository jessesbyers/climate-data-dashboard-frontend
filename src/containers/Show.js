// component provides built-in methods and attributes for components, including lifecycle methods, render(), constructor()
import React, { Component } from 'react';

// importing components form local files
import Chart from '../components/Chart'
import Notices from '../components/Notices'
import Wonders from '../components/Wonders'

// allows us to enable routing by updating the browser url and rendering the appropriate component listed in the Router in App.js
import { NavLink } from 'react-router-dom';

// bootstrap components for css styling
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// enables this component to access state data from the redux store if component is wrapped with connect
import { connect } from 'react-redux'

class Show extends Component {

    render() {
        // defining constants for chart, notices, and wonders based on params of chart id
        const chart = this.props.charts.find(chart => {return chart.id === parseInt(this.props.match.params.id)})
        const notices = this.props.notices.filter(notice => notice.chart_id === chart.id)
        const wonders = this.props.wonders.filter(wonder => wonder.chart_id === chart.id)

        // if a chart exists, it renders the chart, and the notices and wonders components
        if (chart) {

            return (
                <Row>
                    <Col md={3}>
                        <Notices chart={chart} notices={notices} />
                    </Col>

                    <Col md={6} >
                        <Card>
                            <Chart chart={chart} />
                        </Card>

                        <NavLink 
                            to={`/charts/${chart.id}/interact`}>
                            <Button>Interact</Button>
                        </NavLink>  
                    </Col>     

                    <Col md={3}>   
                        <Wonders chart={chart} wonders={wonders} />
                    </Col> 
                </Row>
            );
        // if a chart does not exist, user must go back to the dashboard to choose a chart to reflect on
        } else {
            return (
                <div>
                    <NavLink 
                        style={{ marginRight: '10px' }} 
                        to="/">
                        <Button variant="dark" size="lg" block>Set Up a Data Dashboard to Get Started</Button>
                    </NavLink>
                </div>
            )
        }
    }
};

// this component needs access to chart, notice, and wonder data
const mapStateToProps = state => {
    return {
      charts: state.charts, 
      notices: state.notices, 
      wonders: state.wonders
    }
  }

export default connect (mapStateToProps)(Show)