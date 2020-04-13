import React, { Component } from 'react';
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

    render() {    
        console.log(this.state)
        return (
            <div>

                <form onSubmit={event => this.props.handleDropdownSubmit(event)}>
                    <select value={this.state.chart_url} onChange={event => this.props.handleDropdownChange(event)}>
                        <option value="" disabled>Choose a Chart to Add to the Data Dashboard</option>
                        {this.state.charts.map(chart => <option value={`http://localhost:3000/charts/${chart.id}`} key={chart.id}>{chart.name}</option>)}
                    </select>
                    <input type="submit" value="Add" />
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