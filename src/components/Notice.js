import React, { Component } from 'react';

class Notice extends Component {
    render() {
    
        return (
            <div>
                <h3>Notice Component</h3>
                <p>renders notice content, delete, and upvote button</p>
                <p>{this.props.content}</p>
                <p>Votes: {this.props.votes}</p>


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
                        // onClick={}

                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div>Votes: {}</div>
                </div>

        
            </div>
        );
    }
};
  
  export default Notice;