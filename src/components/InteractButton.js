import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



class InteractButton extends Component {
    render() {
        console.log(this)
    
        return (
            <div>
                <h3>InteractButton Component</h3>
                <p>onClick, routes to New page to view larger chart and ChartInput Form</p>

                {/* <button onClick={(url) => this.props.handleButtonClick(this.props.url)}>View and Interact</button> */}
                <NavLink 
                    style={{ marginRight: '10px' }} 
                    to={`/charts/${this.props.chart_id}/interact`}
                    url={this.props.url}
                >
                    Interact
                </NavLink>
            </div>
        );
    }
};
  
export default InteractButton;