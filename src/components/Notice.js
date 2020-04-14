import React, { Component } from 'react';

class Notice extends Component {
    render() {
        console.log(this.props)
        
        if (this.props.chart) {
    
            return (
                <div>
                    <h6>{this.props.notice.content}</h6>
                    <p>Votes: {this.props.notice.votes}</p>

                    <div className="float-center">
                        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={(chart_id, notice) => this.props.upvoteNotice(this.props.chart.id, this.props.notice)}
                        >
                            Upvote
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={(chart_id, notice) => this.props.downvoteNotice(this.props.chart.id, this.props.notice)}

                        >
                            Downvote
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={(chart_id, notice_id) => this.props.deleteNotice(this.props.chart.id, this.props.notice.id)}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <h3>I notice..."{this.props.notice.content}"</h3>
            )
        }
    }
};
  
  export default Notice;