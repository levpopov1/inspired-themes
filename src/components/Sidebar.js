function Sidebar({theme}) {
  return (
    <div id="sidebar">
      <div className="d-flex flex-column p-3 text-white bg-dark" id="sidebar-inner">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" id="logo">
          <i className="bi bi-palette2 me-2"/>
          Sidebar
        </a>
        <hr/>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active">
              <i className="bi bi-home"></i>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <i className="bi bi-home"></i>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <i className="bi bi-home"></i>
              Orders
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <i className="bi bi-home"></i>
              Products
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <i className="bi bi-home"></i>
              Customers
            </a>
          </li>
        </ul>
        <hr/>
        <div className="dropdown">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <strong>USER</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
