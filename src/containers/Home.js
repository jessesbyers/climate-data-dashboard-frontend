import React, { Component } from 'react';
import Chart from '../components/Chart'
import InteractButton from '../components/InteractButton'
import DropdownInput from '../components/DropdownInput'
import { fetchChartData } from '../actions/fetchChartData'
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
        } else {
            return "Please choose a chart from the dropdown menu"
        }
    }

    handleDelete = (id) => {
        console.log("inside handle delete")
        console.log(id)
        this.props.deleteChart(id)
    }

    render() {
        console.log(this.props)
        return (
            <div>  
                <DropdownInput handleDropdownChange={this.handleDropdownChange} handleDropdownSubmit={this.handleDropdownSubmit}/>

                {this.props.charts.map((chart, index) => {
                    return (
                        <div key ={index}>
                            <Chart url={chart.attributes.screenshot_url}/>
                            <InteractButton url={chart.attributes.screenshot_url} chart_id={chart.id} handleDelete={this.handleDelete}/>
                        </div>
                    )
                })}
            </div>
        );
    }
};

// need to revise to only pass down what is needed
const mapStateToProps = state => {
    return state
    // return {
    //   items: state.items
    // }
}

export default connect (mapStateToProps, {fetchChartData, deleteChart})(Home)