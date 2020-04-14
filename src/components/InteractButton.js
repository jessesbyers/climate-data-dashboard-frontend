import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



class InteractButton extends Component {
    render() {
        if (this.props.chart.id) {
            return (

                <Card.Footer>
                    <NavLink 
                        style={{ marginRight: '10px' }} 
                        to={`/charts/${this.props.chart.id}/interact`}
                        url={this.props.chart.screenshot_url} >
                        <Button variant="primary" >
                            Interact
                        </Button>
                    </NavLink>

                    <NavLink 
                        style={{ marginRight: '10px' }} 
                        to={`/charts/${this.props.chart.id}/reflections`}
                        url={this.props.chart.screenshot_url}>
                        <Button variant="success" >
                            Reflections
                        </Button>
                    </NavLink>
                </Card.Footer>

            );
        } else {
            return null
        }
    }
};
  
export default InteractButton;