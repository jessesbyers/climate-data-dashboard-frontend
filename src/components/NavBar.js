import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
        <h1>NavBar Component Placeholder</h1>
        <p>replace nav links with links/dropdowns that fetch and display dashboard chart elements</p>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/"
      >
        Home
      </NavLink>

      {/* need to edit route names and links to be dynamic */}
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/new"
      >
        New
      </NavLink>
      {/* need to edit route names and links to be dynamic */}
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/show"
      >
        Show
      </NavLink>
      
    </div>
  );
}

export default NavBar;