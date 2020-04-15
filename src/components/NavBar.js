import React from 'react';

// allows us to enable routing by updating the browser url and rendering the appropriate component listed in the Router in App.js
import { NavLink } from 'react-router-dom';

// bootstrap component for css styling
import Button from 'react-bootstrap/Button';


const NavBar = () => {
  return (
    <div style={{ paddingBottom: '15px', marginBottom: '15px' }}>
        <h1 class="header" >Climate Data Dashboard</h1>

      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/">
          <Button variant="dark">Data Dashboard</Button>
      </NavLink>


      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/charts/new">
          <Button variant="dark">Add a New Data Source</Button>
      </NavLink>
    </div>
  );
}

export default NavBar;