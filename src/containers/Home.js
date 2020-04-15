// component provides built-in methods and attributes for components, including lifecycle methods, render(), constructor()
import React, { Component } from 'react';

// importing components form local files
import Chart from '../components/Chart'
import InteractButton from '../components/InteractButton'
import DropdownInput from '../components/DropdownInput'

// enables this component to access state data from the redux store if component is wrapped with connect
import { connect } from 'react-redux'

// bootstrap components for css styling
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


class Home extends Component {

    render() {
        return (
            <div>  
                <Row>
                    <Col>
                    {/* renders the form for loading charts to the dashboard and clearning the dashboard */}
                        <DropdownInput />
                    </Col>
                </Row>

            {/* iterating through all of the charts loaded on the dashboard, 
            and rendering the chart component and buttons for each, passing down a specific chart as props */}
                <Row>
                    {this.props.charts.map((chart) => {

                        return (
                            <Col xs={3} >
                                <Card className="text-center" key={chart.id}>
                                    <Chart chart={chart}/>
                                    <InteractButton chart={chart} />
                                </Card>
                            </Col>
                        )
                    })}
                </Row> 
            </div>
        );
    }
};

// in this container, chart data can be accessed through this.props.charts
const mapStateToProps = state => {
    return {
      charts: state.charts
    }
}

export default connect (mapStateToProps)(Home)