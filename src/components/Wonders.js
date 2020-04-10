import React, { Component } from 'react';
import Wonder from '../components/Wonder'


class Wonders extends Component {
    render() {
    
        return (
            <div >
                <h1>I Wonder...</h1>
                {/* {this.props.chart.wonders.map(chart=> <Wonder content={chart.content} votes={chart.votes} id={chart.id} handleDeleteWonder={this.props.handleDeleteWonder}/>)}*/}
                {this.props.chart.wonders.map(wonder=> <Wonder wonder={wonder} chart={this.props.chart} handleDeleteWonder={this.props.handleDeleteWonder}/>)}        
            </div>
        );
    }
};
  
  export default Wonders;