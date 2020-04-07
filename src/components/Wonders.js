import React, { Component } from 'react';
import Wonder from '../components/Wonder'


class Wonders extends Component {
    render() {
    
        return (
            <div>
                <h3>Wonders Component Placeholder</h3>
                <p>loops through wonders and renders individual Wonder Component</p>
                <Wonder />
        
            </div>
        );
    }
};
  
  export default Wonders;