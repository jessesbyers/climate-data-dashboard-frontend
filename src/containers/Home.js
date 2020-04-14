import React, { Component } from 'react';
import Chart from '../components/Chart'
import InteractButton from '../components/InteractButton'
import DropdownInput from '../components/DropdownInput'

import { deleteChart } from '../actions/deleteChart'

import { connect } from 'react-redux'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


class Home extends Component {

    // handleDelete = (charts) => {
    //     charts.map(chart => this.props.deleteChart(chart))
    // }

    handleDelete = () => {
        console.log(this)
        this.props.charts.map(chart => this.props.deleteChart(chart))
    }


    render() {
        console.log(this)
        return (
            <div>  
                <Row>
                    <Col>
                        <DropdownInput />

                        <button variant="danger"
                            className="btn btn-danger"
                            onClick={this.handleDelete}>
                            {/* onClick={this.handleDelete(this.props.state.charts)}> */}
                            Clear Dashboard
                        </button>
                    </Col>
                </Row>

                <Row>
                    {this.props.charts.map((chart) => {

                        return (
                            <Col xs={3} >
                                <Card className="text-center" key={chart.id}>
                
                                    {/* <Chart url={chart.screenshot_url} name={chart.name}/> */}
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

export default connect (mapStateToProps, {deleteChart})(Home)