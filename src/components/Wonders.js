import React, { Component } from 'react';
import Wonder from '../components/Wonder'


class Wonders extends Component {
    render() {
    
        return (
            <div >
                <h1>I Wonder...</h1>
                {this.props.chart.wonders.map(wonder=> <Wonder wonder={wonder} chart={this.props.chart} deleteWonder={this.props.deleteWonder} upvoteWonder={this.props.upvoteWonder} downvoteWonder={this.props.downvoteWonder}/>)}        
            </div>
        );
    }
};
  
  export default Wonders;