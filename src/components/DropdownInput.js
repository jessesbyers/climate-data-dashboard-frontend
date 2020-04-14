import React, { Component } from 'react';
import { fetchChartData, fetchNotices, fetchWonders } from '../actions/fetchChartData'
import { deleteChart } from '../actions/deleteChart'


import { connect } from 'react-redux'

class DropdownInput extends Component {

    state = {
        chart_url: "",
        charts: []
    }

    componentDidMount(){
        fetch("http://localhost:3000/charts")
        .then(response => response.json())
        .then(charts => {
          console.log(charts)
          this.setState({charts})
        })

    }

    handleDropdownChange = (event) => {
        this.setState({chart_url: event.target.value});
    }

    handleDropdownSubmit = (event) => {
        event.preventDefault()
        if (this.chart_url !== "") {
            this.props.fetchChartData(this.state.chart_url)
            this.props.fetchNotices(this.state.chart_url)
            this.props.fetchWonders(this.state.chart_url)
        } else {
            return "Please choose a chart from the dropdown menu"
        }
    }

    handleDelete = () => {
        console.log(this)
        this.props.charts.map(chart => this.props.deleteChart(chart))
    }

    render() {    
        console.log(this.state)
        return (
            <div>
                <form onSubmit={event => this.handleDropdownSubmit(event)}>
                    <select value={this.state.chart_url} onChange={event => this.handleDropdownChange(event)}>
                        <option value="" disabled>Choose a Chart to Load to the Data Dashboard</option>
                        {this.state.charts.map(chart => <option value={`http://localhost:3000/charts/${chart.id}`} key={chart.id}>{chart.name}</option>)}
                    </select>
                    <input type="submit" value="Load Chart" />
                </form>

                <button variant="danger"
                        className="btn btn-danger"
                        onClick={this.handleDelete}>
                        Clear Dashboard
                </button> 
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        charts: state.charts
    }    
}
  
export default connect (mapStateToProps, { fetchChartData, fetchNotices, fetchWonders, deleteChart} )(DropdownInput);