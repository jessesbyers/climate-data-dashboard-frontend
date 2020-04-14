import React, { Component } from 'react';
import { fetchChartData, fetchNotices, fetchWonders } from '../actions/fetchChartData'

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
            </div>
        );
    }
};

// const mapStateToProps = (state) => {
//     return {
//         charts: state.charts,
//         notices: state.notices, 
//         wonders: state.wonders
//     }    
// }
  
//   export default connect (mapStateToProps, { fetchChartData, fetchNotices, fetchWonders} )(DropdownInput);
  export default connect (null, { fetchChartData, fetchNotices, fetchWonders} )(DropdownInput);