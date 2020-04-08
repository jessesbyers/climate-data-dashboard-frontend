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

      {/* need to edit route names and links to be dynamic */}
      {/* <NavLink 
        style={{ marginRight: '10px' }} 
        to="/charts/:id/new"
      >
        New
      </NavLink> */}
      {/* need to edit route names and links to be dynamic */}
      {/* <NavLink 
        style={{ marginRight: '10px' }} 
        to="/charts/:id/reflections"
      >
        Show
      </NavLink> */}
      
    </div>
  );
}

export default NavBar;