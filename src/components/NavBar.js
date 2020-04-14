import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const NavBar = () => {
  return (
    // <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
    <div>
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