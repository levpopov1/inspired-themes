import ThemeCollection from './ThemeCollection';

function NavBar({collections}) {
  return (
    <header className="" id="navbar">
      <div className="container-fluid">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2">
          <div className="col-md-4 d-flex align-items-center mb-2 mb-md-0">
            <a href="/" className="d-flex align-items-center text-decoration-none" id="logo">
              <i className="bi bi-palette2 me-2"/>
              Inspired Themes
            </a>
          </div>
          <div className="col-12 col-md-4 justify-content-center mb-2 mb-md-0">
            <form className="w-100 me-3">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Paste image URL here" aria-label="Paste image URL here" aria-describedby="button-addon"/>
                <button className="btn btn-outline-light" type="button" id="button-addon">Generate</button>
              </div>
            </form>
          </div>
          <div className="col-md-4 mb-md-0">
            <div className="d-flex flex-row justify-content-end">
              <a className="nav-link" data-bs-toggle="collapse" data-bs-target="#s00" href="#s00" role="button" aria-expanded="true" aria-controls="s00">
                Hidden Content
              </a>
              <div className="dropdown pos-initial">
                <a className="nav-link dropdown-toggle ms-2" id="dropdownNavLink" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Theme Gallery
                </a>
                <ul className="dropdown-menu dropdown-menu-horizontal full-width row" aria-labelledby="dropdownNavLink">
                  {
                    collections.map(collection =>
                      <ThemeCollection collection={collection} key={collection.id}/>
                    )
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
