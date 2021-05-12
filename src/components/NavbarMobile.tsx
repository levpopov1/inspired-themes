import React from 'react';
import { NavLink } from 'react-router-dom';

function NavbarMobile() {
  return (
    <nav className="navbar navbar-adaptive navbar-mobile navbar-dark fixed-bottom d-block d-md-none">
      <ul className="navbar-nav w-100 flex-row justify-content-around">
        <li className="nav-item">
          <NavLink to="/gallery" className="nav-link">
            <i className="bi bi-collection"></i>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/overview" className="nav-link">
            <i className="bi bi-image"></i>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/color" className="nav-link">
            <i className="bi bi-palette"></i>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/typography" className="nav-link">
            <i className="bi bi-fonts"></i>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/layout" className="nav-link">
            <i className="bi bi-columns-gap"></i>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarMobile;
