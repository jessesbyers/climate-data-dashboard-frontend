import React, { Component } from 'react';
import Notice from '../components/Notice'


class Notices extends Component {
    render() {
        console.log(this.props.chart.attributes.notices)
    
        return (
            <div>
                <h3>Notices Component Placeholder</h3>
                <p>loops through notices and renders individual Notice Component</p>
                {this.props.chart.attributes.notices.map(chart=> <Notice content={chart.content} votes={chart.votes}/>)}
                <Notice />
        
            </div>
        );
    }
};
  
  export default Notices;