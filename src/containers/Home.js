import React, { Component } from 'react';
import Chart from '../components/Chart'
import InteractButton from '../components/InteractButton'
import DropdownInput from '../components/DropdownInput'
import DataSourceInput from '../components/DataSourceInput'

import { fetchChartData, fetchNotices, fetchWonders } from '../actions/fetchChartData'
import { deleteChart } from '../actions/deleteChart'


import { connect } from 'react-redux'

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

    handleDelete = (id) => {
        this.props.deleteChart(id)
    }

    // renderDataSourceInput = () => {
    //     console.log("inside render data source input")
    //     console.log(this)
    //     return (
            
    //     )
    // }

    render() {
        console.log(this)
        return (
            <div>  
                <DropdownInput handleDropdownChange={this.handleDropdownChange} handleDropdownSubmit={this.handleDropdownSubmit}/>
                {/* <button onClick={this.renderDataSourceInput}>Add a New Data Source</button> */}
                <DataSourceInput/>



                {this.props.state.charts.map((chart, index) => {
                    return (
                        <div key ={index}>
                            <Chart url={chart.screenshot_url}/>
                            <InteractButton url={chart.screenshot_url} chart_id={chart.id} handleDelete={this.handleDelete}/>
                        </div>
                    )
                })}
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