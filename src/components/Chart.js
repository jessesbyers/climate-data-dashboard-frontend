import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';


class Chart extends Component {
    render() {    
        console.log(this.props)
        if (this.props.url) {
        return (
                <Card.Body>
                    <Card.Title as="p">{this.props.name}</Card.Title>
                    <Card.Img variant="top" src={this.props.url} />
                </Card.Body>
        );
        } else {
            return null
        }
    }
};
  
  export default Chart;