import InternalThemeSwither from './InternalThemeSwitcher';
import ThemesDropdown from './ThemesDropdown';

function NavBar({collections, setTheme}) {
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
                <button className="btn btn-outline" type="button" id="button-addon">Generate</button>
              </div>
            </form>
          </div>
          <div className="col-md-4 mb-md-0">
            <div className="d-flex flex-row justify-content-end">
              <div className="nav-link">
                <InternalThemeSwither/>
              </div>
              <button className="btn nav-link" data-bs-toggle="collapse" data-bs-target="#s00" aria-expanded="false" aria-controls="s00">
                Theme Gallery
              </button>
              {/* <div className="dropdown pos-initial">
                <button className="btn nav-link dropdown-toggle ms-2" id="dropdownNavLink"  data-bs-toggle="dropdown" aria-expanded="false">
                  Theme Gallery
                </button>
                <ul className="dropdown-menu dropdown-menu-horizontal full-width row shadow" aria-labelledby="dropdownNavLink">
                  {
                    collections.map(collection =>
                      <ThemesDropdown collection={collection} setTheme={setTheme} key={collection.id}/>
                    )
                  }
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
