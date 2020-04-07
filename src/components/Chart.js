import React, { Component } from 'react';

class Chart extends Component {
    render() {
    
        return (
            <div>
                <h1>Chart Component Placeholder</h1>
        
                <img src={this.props.url} alt="placeholder temp chart"/>
                <button>View Chart</button>
        

            </div>
        );
    }
};
  
  export default Chart;