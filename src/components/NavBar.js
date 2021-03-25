function NavBar() {
  return (
    <header className="shadow-sm">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
          <div className="col-md-4 d-flex align-items-center mb-2 mb-md-0">
            <a href="/" className="d-flex align-items-center text-dark text-decoration-none" id="logo">
              <i className="bi bi-palette2 me-2"/>
              Inspired Themes
            </a>
          </div>
          <div className="col-12 col-md-4 justify-content-center mb-2 mb-md-0">
            <form class="w-100 me-3">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Paste Twitter URL here" aria-label="Paste Twitter URL here" aria-describedby="button-addon"/>
                <button class="btn btn-outline-primary" type="button" id="button-addon">Generate</button>
              </div>
            </form>
          </div>
          <div className="col-md-4 text-end mb-md-0">
            <div className="dropdown">
              <a href="#" class="link-dark text-decoration-none dropdown-toggle" id="dropdownNavLink" data-bs-toggle="dropdown" aria-expanded="false">
                Gallery
              </a>
              <ul class="dropdown-menu dropdown-menu-end text-small shadow" aria-labelledby="dropdownNavLink">
                <li><a class="dropdown-item" href="#">Overview</a></li>
                <li><a class="dropdown-item" href="#">Inventory</a></li>
                <li><a class="dropdown-item" href="#">Customers</a></li>
                <li><a class="dropdown-item" href="#">Products</a></li>
                <li><a class="dropdown-item" href="#">Reports</a></li>
                <li><a class="dropdown-item" href="#">Analytics</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
