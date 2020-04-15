import React, { Component } from 'react';
import Wonder from '../components/Wonder'

import {  deleteWonder } from '../actions/deleteReflections'
import { upvoteWonder, downvoteWonder } from '../actions/updateVotes'

import { connect } from 'react-redux'


class Wonders extends Component {
    render() {

        // sorting all of the notices for this chart by votes before rendering the notice component
        let sortedWonders = this.props.wonders.sort((a, b) => (a.votes < b.votes) ? 1 : -1)

        return (
            <div >
                {sortedWonders.map(wonder=> <Wonder wonder={wonder} chart={this.props.chart} deleteWonder={this.props.deleteWonder} upvoteWonder={this.props.upvoteWonder} downvoteWonder={this.props.downvoteWonder}/>)}        
            </div>
        );
    }
};
  
//   export default Wonders;
  export default connect (null, { deleteWonder, upvoteWonder, downvoteWonder })(Wonders)
