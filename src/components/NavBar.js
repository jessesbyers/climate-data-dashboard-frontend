import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
        <h1>NavBar Component Placeholder</h1>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/"
      >
        Home
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/charts/1/new"
      >
        New
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/charts/1/show"
      >
        Show
      </NavLink>
      
    </div>
  );
}

export default NavBar;