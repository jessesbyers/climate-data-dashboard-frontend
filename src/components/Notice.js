import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



class Notice extends Component {
    render() {
        // conditional logic to render content with buttons if it is already saved to the database
        if (this.props.chart) {
    
            return (
                <Card className="text-center">
                    <Card.Body>
                    <Card.Header>I notice...</Card.Header>
                        <Card.Text>
                            {this.props.notice.content}
                        </Card.Text>
                        <Card.Text>
                            Votes: {this.props.notice.votes}
                        </Card.Text>
                    </Card.Body>

                    <Card.Footer>

                        <Button
                            size="sm"
                            variant="primary"
                            onClick={(chart_id, notice) => this.props.upvoteNotice(this.props.chart.id, this.props.notice)}
                        >
                            Agree
                        </Button>
                        <Button
                            size="sm"
                            variant="success"
                            onClick={(chart_id, notice) => this.props.downvoteNotice(this.props.chart.id, this.props.notice)}
                        >
                            Disagree
                        </Button>
                        <Button
                            size="sm"
                            variant="danger"
                            onClick={(chart_id, notice_id) => this.props.deleteNotice(this.props.chart.id, this.props.notice.id)}
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
                        <Card.Header>I notice...</Card.Header>
                        <Card.Title>
                            {this.props.notice.content}
                        </Card.Title>
                    </Card.Body>
                </Card>
            )
        }
    }
};
  
  export default Notice;