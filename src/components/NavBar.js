import ThemeCollection from './ThemeCollection';

function NavBar({collections}) {
  return (
    <header className="shadow-sm w-100">
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
          <div className="col-md-4 text-end mb-md-0">
            <div className="dropdown pos-initial">
              <a href="#" className="link text-decoration-none dropdown-toggle" id="dropdownNavLink" data-bs-toggle="dropdown" aria-expanded="false">
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
    </header>
  );
}

export default NavBar;
