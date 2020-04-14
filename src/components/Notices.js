import React, { Component } from 'react';
import Notice from '../components/Notice'

import { deleteNotice } from '../actions/deleteReflections'
import { upvoteNotice, downvoteNotice } from '../actions/updateVotes'

import { connect } from 'react-redux'

class Notices extends Component {
    render() {
        console.log(this.props)

        let sortedNotices = this.props.notices.sort((a, b) => (a.votes < b.votes) ? 1 : -1)
    
        return (
            <div>
                <h1>I Notice...</h1>
                {sortedNotices.map(notice=> <Notice notice={notice} chart={this.props.chart} deleteNotice={this.props.deleteNotice} upvoteNotice={this.props.upvoteNotice} downvoteNotice={this.props.downvoteNotice}/>)}        
            </div>
        );
    }
};
  
export default connect (null, {deleteNotice, upvoteNotice, downvoteNotice})(Notices)
