import React, { Component } from 'react';

class Wonder extends Component {
    render() {

        if (this.props.chart) {
    
            return (
                <div>
                    <h6>{this.props.wonder.content}</h6>
                    <p>Votes: {this.props.wonder.votes}</p>

                    <div className="float-center">
                        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={(chart_id, wonder) => this.props.upvoteWonder(this.props.chart.id, this.props.wonder)}
                        >
                            Upvote
                        </button>

                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={(chart_id, wonder) => this.props.downvoteWonder(this.props.chart.id, this.props.wonder)}

                        >
                            Downvote
                        </button>

                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={(chart_id, wonder_id) => this.props.deleteWonder(this.props.chart.id, this.props.wonder.id)}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                    </div>

                </div>
            );
        } else {
            return (
                <h3>I wonder..."{this.props.wonder.content}"</h3>
            )
        }

    }
};
  
export default Wonder;