import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';


class Chart extends Component {
    render() {    
        console.log(this.props)
        if (this.props.chart.screenshot_url) {
        return (
                <Card.Body>
                    <Card.Title as="p">{this.props.chart.name}</Card.Title>
                    <Card.Img variant="top" src={this.props.chart.screenshot_url} />
                </Card.Body>
        );
        } else {
            return null
        }
    }
};
  
export default Chart;