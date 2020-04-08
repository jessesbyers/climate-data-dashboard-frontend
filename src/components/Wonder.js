import React, { Component } from 'react';

class Wonder extends Component {
    render() {
    
        return (
            <div>
                <h3>Wonder Component</h3>
                <p>renders wonder content, delete, and upvote button</p>
                <p>text</p>

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
  
  export default Wonder;