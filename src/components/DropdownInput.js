import React, { Component } from 'react';
import { connect } from 'react-redux'


class DropdownInput extends Component {

    state = {
        chart_url: ""
    }
    render() {    
        return (
            <div>
                <h3>DropdownInput Component </h3>
                <p>user clicks on each chart they want to see on the data dashboard</p>

                <form onSubmit={event => this.props.handleDropdownSubmit(event)}>
                    <select value={this.state.chart_url} onChange={event => this.props.handleDropdownChange(event)}>
                        <option value="" disabled selected>Choose a Chart to Add to the Data Dashboard</option>
                        <option value="http://localhost:3000/charts/1">Contiguous U.S., Average Temperature, January-December</option>
                        <option value="http://localhost:3000/charts/2">Contiguous U.S., Precipitation, January-December</option>
                        <option value="http://localhost:3000/charts/3">Vermont, Average Temperature, January-December</option>
                    </select>
                    <input type="submit" value="Add Chart to Dashboard" />
                </form>
                    
            </div>
        );
    }


};
const mapStateToProps = (state) => {
    return (
        state
    )
}


  
  export default connect (mapStateToProps)(DropdownInput);