import React, { Component } from 'react';
import Notice from '../components/Notice'


class Notices extends Component {
    render() {
    
        return (
            <div>
                <h3>Notices Component Placeholder</h3>
                <p>loops through notices and renders individual Notice Component</p>
                <Notice />
        
            </div>
        );
    }
};
  
  export default Notices;