import React, { Component } from 'react';

class Notice extends Component {
    render() {
        console.log(this.props)
    
        return (
            <div>
                <h6>{this.props.notice.content}</h6>
                <p>Votes: {this.props.notice.votes}</p>


                <div className="float-center">
                    <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                    <button
                        type="button"
                        className="btn btn-primary"
                        // onClick={}
                    >
                        Upvote
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        // onClick={}

                    >
                        Downvote
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={(event, chart_id, notice_id) => this.props.handleDeleteNotice(event, this.props.chart.id, this.props.notice.id)}

                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                </div>
            </div>
        );
    }
};
  
  export default Notice;