import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



class InteractButton extends Component {
    render() {
    
        return (
            <div>
                <Card.Footer>

                    <NavLink 
                        style={{ marginRight: '10px' }} 
                        to={`/charts/${this.props.chart_id}/interact`}
                        url={this.props.url} >
                        <Button variant="primary" >
                            Interact
                        </Button>
                    </NavLink>

                    <NavLink 
                        style={{ marginRight: '10px' }} 
                        to={`/charts/${this.props.chart_id}/reflections`}
                        url={this.props.url}>
                        <Button variant="success" >
                            Reflections
                        </Button>
                    </NavLink>

                    <button variant="danger"
                            key={this.props.chart_id}
                            // type="button"
                            className="btn btn-danger"
                            onClick={id => this.props.handleDelete(this.props.chart_id)}
                        >Remove
                    </button>

                </Card.Footer>
            </div>
        );
    }
};
  
export default InteractButton;