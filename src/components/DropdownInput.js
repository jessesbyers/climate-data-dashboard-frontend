import React, { Component } from 'react';
import { fetchChartData, fetchNotices, fetchWonders } from '../actions/fetchChartData'
import { deleteChart } from '../actions/deleteChart'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { connect } from 'react-redux'

class DropdownInput extends Component {

    state = {
        chart_url: "",
        charts: [],
        removedCharts: []
    }

    componentDidMount(){
        fetch("http://localhost:3000/charts")
        .then(response => response.json())
        .then(charts => {
          this.setState({charts})
        })
    }

    handleDropdownChange = (event) => {
        this.setState({chart_url: event.target.value});
    }

    handleDropdownSubmit = (event) => {
        console.log(this.state.charts)
        event.preventDefault()

        if (this.chart_url !== "") {
            this.props.fetchChartData(this.state.chart_url)
            this.props.fetchNotices(this.state.chart_url)
            this.props.fetchWonders(this.state.chart_url)

            // manipulating local state to remove from dropdown any charts already in the dashboard
            this.setState({
                charts: this.state.charts.filter(chart => this.state.chart_url !== `http://localhost:3000/charts/${chart.id}`),
                removedCharts: this.state.charts.filter(chart => this.state.chart_url === `http://localhost:3000/charts/${chart.id}`)
            })
        } else {
            return "Please choose a chart from the dropdown menu"
        }
    }

    handleDelete = () => {
        this.props.charts.map(chart => this.props.deleteChart(chart))
        // manipulating local state to render all chart options in dropdown menu
        this.setState({
            charts: [...this.state.charts.concat(this.props.charts)],
            removedCharts: []
        })
    }

    render() {    
        console.log(this.props.charts)

        return (
            <Form onSubmit={event => this.handleDropdownSubmit(event)}>
                <Form.Group>
                    <Form.Control as="select" size="lg" value={this.state.chart_url} onChange={event => this.handleDropdownChange(event)}>
                        <option  value="" >Choose a Chart to Load to the Data Dashboard</option>
                        {this.state.charts.map(chart => <option value={`http://localhost:3000/charts/${chart.id}`} key={chart.id}>{chart.name}</option>)}
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                        <Button type="submit"> Load Chart</Button>

                        <Button variant="danger"
                            className="btn btn-danger"
                            onClick={this.handleDelete}>
                            Clear Dashboard
                        </Button> 
                </Form.Group>
            </Form>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        charts: state.charts
    }    
}
  
export default connect (mapStateToProps, { fetchChartData, fetchNotices, fetchWonders, deleteChart} )(DropdownInput);

