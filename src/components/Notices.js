import React, { Component } from 'react';

import Notice from '../components/Notice'

import { deleteNotice } from '../actions/deleteReflections'
import { upvoteNotice, downvoteNotice } from '../actions/updateVotes'

import { connect } from 'react-redux'

class Notices extends Component {
    render() {
        // sorting all of the notices for this chart by votes before rendering the notice component
        let sortedNotices = this.props.notices.sort((a, b) => (a.votes < b.votes) ? 1 : -1)
    
        return (
            <div>
                {sortedNotices.map(notice=> <Notice notice={notice} chart={this.props.chart} deleteNotice={this.props.deleteNotice} upvoteNotice={this.props.upvoteNotice} downvoteNotice={this.props.downvoteNotice}/>)}        
            </div>
        );
    }
};
  
export default connect (null, {deleteNotice, upvoteNotice, downvoteNotice})(Notices)
