import React, { Component } from 'react';
import Notice from '../components/Notice'


class Notices extends Component {
    render() {
        console.log(this.props.chart.attributes.notices)
    
        return (
            <div>
                <h1>I Notice...</h1>
                {this.props.chart.attributes.notices.map(chart=> <Notice content={chart.content} votes={chart.votes}/>)}        
            </div>
        );
    }
};
  
  export default Notices;