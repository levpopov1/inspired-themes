import { NavLink } from 'react-router-dom';
import InternalThemeSwither from './InternalThemeSwitcher';

const closeMenu = () => {
  let navCollapse = document.querySelector(".navbar-collapse");
  navCollapse.classList.remove("show");
}

function NavBar2({theme}) {
  return (
    <nav className="navbar navbar-expand-md navbar-adaptive navbar-dark sticky-top">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand text-adaptive mx-2">
          <i className="bi bi-palette2 me-2"/>
          {
            theme.name === "Default"
            ? <span className="d-inline d-lg-none">Inspired Themes</span>
            : <span className="d-inline d-lg-none">{theme.name}</span>
          }
          <span className="d-none d-lg-inline">Inspired Themes</span>
        </NavLink>
        <div className="d-none d-lg-block">
          <span className="navbar-text">
            <i className="bi bi-dot"></i>
          </span>
          <span className="navbar-text ms-2">
            {theme.name}
          </span>
        </div>
        <button className="navbar-toggler text-adaptive collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="bi bi-grid-fill"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto align-items-md-center">
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
            <li className="nav-item">
              <button className="btn btn-sm btn-outline" data-bs-toggle="modal" data-bs-target="#exportThemeModal">
                Export Theme
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar2;
