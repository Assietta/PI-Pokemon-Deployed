import style from './NavBar.module.css'
import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar() {
    return (
      <nav>
        <ul className={style.navlist}>
          <li>
            <NavLink to="/"  activeclassname="active">LandingPage</NavLink>
          </li>
          <li>
            <NavLink to="/Home" activeclassname="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Forms" activeclassname="active">Form</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default NavBar;
  