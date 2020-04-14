import React, { Component } from 'react';
import Chart from '../components/Chart'
import InteractButton from '../components/InteractButton'
import DropdownInput from '../components/DropdownInput'

import { connect } from 'react-redux'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


class Home extends Component {

    render() {
        console.log(this)
        return (
            <div>  
                <Row>
                    <Col>
                        <DropdownInput />
                    </Col>
                </Row>

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

const mapStateToProps = state => {
    return {
      charts: state.charts
    }
}

export default connect (mapStateToProps)(Home)