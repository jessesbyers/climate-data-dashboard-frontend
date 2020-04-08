import React, { Component } from 'react';


class Chart extends Component {
    render() {
    
        return (
            <div>
                <h3>Chart Component Placeholder</h3>
                <p>renders individual chart components and view button (link to new container)</p>

                <img src={this.props.url} alt="placeholder temp chart"/>
        
            </div>
        );
    }
};
  
  export default Chart;