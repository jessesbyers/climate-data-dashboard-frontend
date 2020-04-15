import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



class Wonder extends Component {
    render() {
        // conditional logic to render content with buttons if it is already saved to the database
        if (this.props.chart) {
    
            return (
                <Card className="text-center">
                    <Card.Body>
                        <Card.Header>I wonder...</Card.Header>
                        <Card.Text>
                            {this.props.wonder.content}
                        </Card.Text>
                        <Card.Text>
                            Votes: {this.props.wonder.votes}
                        </Card.Text>
                    </Card.Body>

                    <Card.Footer>
                        <Button
                            size="sm"
                            variant="primary"
                            onClick={(chart_id, wonder) => this.props.upvoteWonder(this.props.chart.id, this.props.wonder)}
                        >
                            Agree
                        </Button>

                        <Button
                            size="sm"
                            variant="success"
                            onClick={(chart_id, wonder) => this.props.downvoteWonder(this.props.chart.id, this.props.wonder)}
                        >
                            Disagree
                        </Button>

                        <Button
                            size="sm"
                            variant="danger"
                            onClick={(chart_id, wonder_id) => this.props.deleteWonder(this.props.chart.id, this.props.wonder.id)}
                        >X
                        </Button>
                    </Card.Footer>
                </Card>            
            );
        // only renders content without interaction buttons if it is not yet saved to the database (from ChartInput)
        } else {
            return (
                <Card className="text-center">
                    <Card.Body>
                        <Card.Header>I wonder...</Card.Header>
                        <Card.Title>
                            {this.props.wonder.content}
                        </Card.Title>
                    </Card.Body>
                </Card>
            )
        }

    }
};
  
export default Wonder;