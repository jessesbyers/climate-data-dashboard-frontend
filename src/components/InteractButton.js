// component provides built-in methods and attributes for components, including lifecycle methods, render(), constructor()
import React, { Component } from 'react';

// allows us to enable routing by updating the browser url and rendering the appropriate component listed in the Router in App.js
import { NavLink } from 'react-router-dom';

// bootstrap components for css styling
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


// renders two buttons in NavLinks associated with the chart.id
class InteractButton extends Component {
    render() {
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
    }
};
  
export default InteractButton;