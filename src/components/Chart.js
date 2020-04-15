// component provides built-in methods and attributes for components, including lifecycle methods, render(), constructor()
import React, { Component } from 'react';

// bootstrap components for css styling
import Card from 'react-bootstrap/Card';


// this component is not connected to the redux store because the specific chart data is passed down from a parent component
class Chart extends Component {
    render() {    
        // if (this.props.chart.screenshot_url) {
        return (
                <Card.Body>
                    <Card.Title as="p">{this.props.chart.name}</Card.Title>
                    <Card.Img variant="top" src={this.props.chart.screenshot_url} />
                </Card.Body>
        );
        // } else {
            // return null
        // }
    }
};
  
export default Chart;