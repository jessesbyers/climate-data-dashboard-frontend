import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



class InteractButton extends Component {
    render() {
        console.log(this)
    
        return (
            <div>
                <NavLink 
                    style={{ marginRight: '10px' }} 
                    to={`/charts/${this.props.chart_id}/interact`}
                    url={this.props.url}
                >
                    Interact
                </NavLink>
                <NavLink 
                    style={{ marginRight: '10px' }} 
                    to={`/charts/${this.props.chart_id}/reflections`}
                    url={this.props.url}
                >
                    Reflections
                </NavLink>
                <button key={this.props.chart_id}
                        type="button"
                        className="btn btn-danger"
                        onClick={id => this.props.handleDelete(this.props.chart_id)}

                    >
                        <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
    }
};
  
export default InteractButton;