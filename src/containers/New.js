// component provides built-in methods and attributes for components, including lifecycle methods, render(), constructor()
import React, { Component } from 'react';

// importing components form local files
import Chart from '../components/Chart'
import ChartInput from '../components/ChartInput'

// allows us to enable routing by updating the browser url and rendering the appropriate component listed in the Router in App.js
import { NavLink } from 'react-router-dom';

// bootstrap components for css styling
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// enables this component to access state data from the redux store if component is wrapped with connect
import { connect } from 'react-redux'

class New extends Component {

    render() {
        // defines value of chart referencing params in url 
        const chart = this.props.charts.find(chart => {return chart.id === parseInt(this.props.match.params.id)})
    
        // if a chart exists, it renders the form and the chart
        if (chart) {
            return (
                <div>
                    <Row>
                        <Col>
                            <Card>
                                {/* passes down chart_id to enable new reflections to be associated with the correct chart */}
                                <ChartInput chart_id={chart.id}/>
                            </Card>
                            

                        </Col>

                        <Col>
                            <Card>
                                <Chart chart={chart}/>
                            </Card>
                        </Col>
                    
                    </Row>
                </div>
            )
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

const mapStateToProps = state => {
    return {
      charts: state.charts
    }
  }

export default connect (mapStateToProps)(New)