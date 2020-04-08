import React, { Component } from 'react';
import Wonder from '../components/Wonder'


class Wonders extends Component {
    render() {
    
        return (
            <div>
                <h1>I Wonder...</h1>
                {this.props.chart.attributes.wonders.map(chart=> <Wonder content={chart.content} votes={chart.votes}/>)}             
            </div>
        );
    }
};
  
  export default Wonders;