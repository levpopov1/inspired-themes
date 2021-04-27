import { NavLink } from 'react-router-dom';
import InternalThemeSwither from './InternalThemeSwitcher';

function NavBar2() {
  return (
    <nav className="navbar navbar-expand-lg navbar-adaptive mb-3 sticky-top">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <i className="bi bi-palette2 me-2"/>
          Inspired Themes
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/gallery" className="nav-link">
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/overview" className="nav-link">
                Overview
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/color" className="nav-link">
                Color
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/typography" className="nav-link">
                Typography
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/layout" className="nav-link">
                Layout
              </NavLink>
            </li>
            <li className="nav-link">
              <InternalThemeSwither/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar2;
