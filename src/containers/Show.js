import React, { Component } from 'react';
import Chart from '../components/Chart'
import Notices from '../components/Notices'
import Wonders from '../components/Wonders'
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



import { connect } from 'react-redux'

class Show extends Component {

    render() {
        console.log(this)
        const chart = this.props.charts.find(chart => {return chart.id === parseInt(this.props.match.params.id)})
        const notices = this.props.notices.filter(notice => notice.chart_id === chart.id)
        const wonders = this.props.wonders.filter(wonder => wonder.chart_id === chart.id)

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

const mapStateToProps = state => {
    return {
      charts: state.charts, 
      notices: state.notices, 
      wonders: state.wonders
    }
  }

export default connect (mapStateToProps)(Show)