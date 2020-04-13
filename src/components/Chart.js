import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';



class Chart extends Component {
    render() {    
        console.log(this.props)
        return (
            <div>
                <Card.Body>
                    <Card.Title as="p">{this.props.name}</Card.Title>
                    <Card.Img variant="top" src={this.props.url} />
                {/* <img src={this.props.url} alt="placeholder temp chart"/> */}
                </Card.Body>
            </div>
        );
    }
};
  
  export default Chart;