import React, { Component } from 'react';
import Notice from '../components/Notice'


class Notices extends Component {
    render() {
        console.log(this.props)
    
        return (
            <div>
                <h1>I Notice...</h1>
                {/* {this.props.chart.notices.map(chart=> <Notice content={chart.content} votes={chart.votes} handleDelete={this.props.handleDelete}/>)}         */}

                {this.props.chart.notices.map(notice=> <Notice notice={notice} chart={this.props.chart} handleDeleteNotice={this.props.handleDeleteNotice}/>)}        
            </div>
        );
    }
};
  
  export default Notices;