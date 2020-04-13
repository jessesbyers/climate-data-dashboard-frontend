import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
        <h1>Climate Data Dashboard</h1>

      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/"
      >
        Return To Data Dashboard
      </NavLink>


      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/charts/new"
      >
        Add a New Data Source
      </NavLink>
      
    </div>
  );
}

export default NavBar;