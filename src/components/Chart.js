import React, { Component } from 'react';


class Chart extends Component {
    render() {    
        return (
            <div>
                <img src={this.props.url} alt="placeholder temp chart"/>
            </div>
        );
    }
};
  
  export default Chart;