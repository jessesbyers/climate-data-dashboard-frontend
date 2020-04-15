// component provides built-in methods and attributes for components, including lifecycle methods, render(), constructor()
import React, { Component } from 'react';

// importing actions from local files
import { fetchChartData, fetchNotices, fetchWonders } from '../actions/fetchChartData'
import { deleteChart } from '../actions/deleteChart'

// bootstrap components for css styling
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// enables this component to access state data from the redux store if component is wrapped with connect
import { connect } from 'react-redux'

class DropdownInput extends Component {
    // initial state has placeholders for form value(url) of selected chart, an array of all charts fetched from the database, 
    // and an array of charts currently loaded on the data dashboard
    state = {
        chart_url: "",
        charts: [],
        loadedCharts: []
    }

    // as page is loading, a fetch get request is made to retrieve all of the charts currently in the database, and set them into charts array in local state
    componentDidMount(){
        fetch("http://localhost:3000/charts")
        .then(response => response.json())
        .then(charts => {
          this.setState({charts})
        })
    }

    // local state is updated as user interacts with the dropdown menu, capturing the current value of the chart_url
    handleDropdownChange = (event) => {
        this.setState({chart_url: event.target.value});
    }

    // On form submitssion, 3 fetch get requests are triggered to fetch chart data, notices data, and wonders data associated with the selected chart
    handleDropdownSubmit = (event) => {
        event.preventDefault()

        if (this.chart_url !== "") {
            this.props.fetchChartData(this.state.chart_url)
            this.props.fetchNotices(this.state.chart_url)
            this.props.fetchWonders(this.state.chart_url)

            // manipulating local state to remove from dropdown list any charts already in the dashboard
            this.setState({
                charts: this.state.charts.filter(chart => this.state.chart_url !== `http://localhost:3000/charts/${chart.id}`),
                loadedCharts: this.state.charts.filter(chart => this.state.chart_url === `http://localhost:3000/charts/${chart.id}`)
            })
        } else {
            return "Please choose a chart from the dropdown menu"
        }
    }

    // triggers deleteChart action to clear all charts from the dashboard and from local state.loadedCharts
    handleDelete = () => {
        this.props.charts.map(chart => this.props.deleteChart(chart))
        // manipulating local state to render all chart options in dropdown menu
        this.setState({
            charts: [...this.state.charts.concat(this.props.charts)],
            loadedCharts: []
        })
    }

    // renders dropdown form, load chart button, and clear dashboard button
    render() {    

        return (
            <Form onSubmit={event => this.handleDropdownSubmit(event)}>
                <Form.Group>
                    <Form.Control as="select" size="lg" value={this.state.chart_url} onChange={event => this.handleDropdownChange(event)}>

                        {/* dropdown form options are dynamically generated by iterating through the charts in this.state.charts */}
                        <option  value="" >Choose a Chart to Load to the Data Dashboard</option>
                        {this.state.charts.map(chart => <option value={`http://localhost:3000/charts/${chart.id}`} key={chart.id}>{chart.name}</option>)}
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                        <Button type="submit"> Load Chart</Button>

                        <Button variant="danger"
                            onClick={this.handleDelete}>
                            Clear Dashboard
                        </Button> 
                </Form.Group>
            </Form>
        );
    }
};

// charts in the redux store can be accessed in this component through this.props.charts
const mapStateToProps = (state) => {
    return {
        charts: state.charts
    }    
}

// 4 actions included in mapDispatchToProps shorthand
export default connect (mapStateToProps, { fetchChartData, fetchNotices, fetchWonders, deleteChart} )(DropdownInput);

