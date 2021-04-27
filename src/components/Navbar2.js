import { NavLink } from 'react-router-dom';
import InternalThemeSwither from './InternalThemeSwitcher';

const closeMenu = () => {
  let navCollapse = document.querySelector(".navbar-collapse");
  navCollapse.classList.remove("show");
}

function NavBar2() {
  return (
    <nav className="navbar navbar-expand-lg navbar-adaptive sticky-top">
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
              <NavLink to="/gallery" className="nav-link" onClick={closeMenu}>
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/overview" className="nav-link" onClick={closeMenu}>
                Overview
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/color" className="nav-link" onClick={closeMenu}>
                Color
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/typography" className="nav-link" onClick={closeMenu}>
                Typography
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/layout" className="nav-link" onClick={closeMenu}>
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
