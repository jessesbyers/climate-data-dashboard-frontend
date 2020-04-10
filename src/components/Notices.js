import React, { Component } from 'react';
import Notice from '../components/Notice'


class Notices extends Component {
    render() {
    
        return (
            <div>
                <h1>I Notice...</h1>
                {this.props.chart.notices.map(notice=> <Notice notice={notice} chart={this.props.chart} deleteNotice={this.props.deleteNotice} upvoteNotice={this.props.upvoteNotice} downvoteNotice={this.props.downvoteNotice}/>)}        
            </div>
        );
    }
};
  
  export default Notices;