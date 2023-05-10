import style from './NavBar.module.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from './logo.png'

function NavBar() {
    return (
      <nav>
        <ul className={style.navlist}>
          <Link to="/" className={style.landing}>
            <img src={logo} alt="Logo" className={style.logo} />
          </Link>
          <div className={style.div}>
            <div className={style.home}>
              <li >
              <NavLink to="/Home" activeclassname={style.active}>Home</NavLink>
              </li>

            </div>
            <li className={style.form}>
              <NavLink to="/Forms" activeclassname={style.active}>Form</NavLink>
            </li>
          </div>
        </ul>
      </nav>
    );
  }
  
  export default NavBar;
  