import React, { Component } from 'react';
import Chart from '../components/Chart'
import InteractButton from '../components/InteractButton'
import DropdownInput from '../components/DropdownInput'

import { fetchChartData, fetchNotices, fetchWonders } from '../actions/fetchChartData'
import { deleteChart } from '../actions/deleteChart'


import { connect } from 'react-redux'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';





class Home extends Component {

    handleDropdownChange = (event) => {
        this.setState({chart_url: event.target.value});
    }

    handleDropdownSubmit = (event) => {
        event.preventDefault()
        if (this.state.chart_url !== "") {
            this.props.fetchChartData(this.state.chart_url)
            this.props.fetchNotices(this.state.chart_url)
            this.props.fetchWonders(this.state.chart_url)
        } else {
            return "Please choose a chart from the dropdown menu"
        }
    }

    // handleDelete = (charts) => {
    //     charts.map(chart => this.props.deleteChart(chart))
    // }

    handleDelete = () => {
        console.log(this)
        this.props.state.charts.map(chart => this.props.deleteChart(chart))
    }


    render() {
        console.log(this)
        return (
            <div>  
                <Row>
                    <Col>
                        <DropdownInput handleDropdownChange={this.handleDropdownChange} handleDropdownSubmit={event => this.handleDropdownSubmit(event)}/>
                        <button variant="danger"
                            className="btn btn-danger"
                            onClick={this.handleDelete}>
                            {/* onClick={this.handleDelete(this.props.state.charts)}> */}
                            Clear Dashboard
                        </button>
                    </Col>
                </Row>

                <Row>
                    {this.props.state.charts.map((chart, index) => {

                        return (
                            <Col xs={3} >
                                <Card className="text-center" key={chart.id}>
                
                                    <Chart url={chart.screenshot_url} name={chart.name}/>

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

// need to revise to only pass down what is needed
const mapStateToProps = state => {
    // return state
    return {
      state
    }
}

export default connect (mapStateToProps, {fetchChartData, fetchNotices, fetchWonders, deleteChart})(Home)