import style from './NavBar.module.css'
import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar() {
    return (
      <nav>
        <ul className={style.navlist}>
          <li>
            <NavLink to="/" exact activeClassName="active">LandingPage</NavLink>
          </li>
          <li>
            <NavLink to="/Home" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Forms" activeClassName="active">Form</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default NavBar;
  