function Sidebar({theme}) {

  const ToggleActive = (e) => {
    let item = e.currentTarget;
    let caret = e.currentTarget.children[2];
    item.classList.toggle("active");
    caret.classList.toggle("active");
  }

  return (
    <div className="d-none d-md-block" id="sidebar">
      <div className="d-flex flex-column sticky-top p-3 text-white bg-dark" id="sidebar-inner">
        <a href="/" className="d-flex align-items-center text-white text-decoration-none" id="logo">
          <i className="bi bi-palette2 me-2"/>
          <span className="fs-4">Inspired Themes</span>
        </a>
        <hr/>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="bi bi-house me-2"></i>
              Home
            </a>
          </li>
          <li className="nav-item">
            <button onClick={ToggleActive} className="nav-link d-flex w-100 text-white" data-bs-toggle="collapse" data-bs-target="#gallery-collapse" aria-expanded="false">
              <i className="bi bi-palette2 me-2"></i>
              <span>Theme Gallery</span>
              <i className="bi bi-caret-right ms-auto"></i>
            </button>
            <div className="collapse" id="gallery-collapse">
              <ul className="nav flex-column">
                <li className="nav-item"><a href="#" className="nav-link">Overview</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Updates</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Reports</a></li>
              </ul>
            </div>
          </li>
        </ul>
        <div className="card text-dark">
          <img src={theme.image} className="card-img-top" alt={'Image of ' + theme.name }/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className="d-grid gap-2">
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
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
