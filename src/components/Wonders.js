import React, { Component } from 'react';
import Wonder from '../components/Wonder'


class Wonders extends Component {
    render() {
        let sortedWonders = this.props.wonders.sort((a, b) => (a.votes < b.votes) ? 1 : -1)

    
        return (
            <div >
                <h1>I Wonder...</h1>
                {sortedWonders.map(wonder=> <Wonder wonder={wonder} chart={this.props.chart} deleteWonder={this.props.deleteWonder} upvoteWonder={this.props.upvoteWonder} downvoteWonder={this.props.downvoteWonder}/>)}        
            </div>
        );
    }
};
  
  export default Wonders;