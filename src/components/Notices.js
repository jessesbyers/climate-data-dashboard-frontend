import React, { Component } from 'react';
import Notice from '../components/Notice'


class Notices extends Component {
    render() {
        let sortedNotices = this.props.chart.notices.sort((a, b) => (a.votes < b.votes) ? 1 : -1)
    
        return (
            <div>
                <h1>I Notice...</h1>
                {sortedNotices.map(notice=> <Notice notice={notice} chart={this.props.chart} deleteNotice={this.props.deleteNotice} upvoteNotice={this.props.upvoteNotice} downvoteNotice={this.props.downvoteNotice}/>)}        
            </div>
        );
    }
};
  
  export default Notices;