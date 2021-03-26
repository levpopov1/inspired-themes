function NavBar() {
  return (
    <header className="shadow-sm">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2">
          <div className="col-md-4 d-flex align-items-center mb-2 mb-md-0">
            <a href="/" className="d-flex align-items-center text-dark text-decoration-none" id="logo">
              <i className="bi bi-palette2 me-2"/>
              Inspired Themes
            </a>
          </div>
          <div className="col-12 col-md-4 justify-content-center mb-2 mb-md-0">
            <form className="w-100 me-3">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Paste Twitter URL here" aria-label="Paste Twitter URL here" aria-describedby="button-addon"/>
                <button className="btn btn-outline-primary" type="button" id="button-addon">Generate</button>
              </div>
            </form>
          </div>
          <div className="col-md-4 text-end mb-md-0">
            <div className="dropdown pos-initial">
              <a href="#" className="link-dark text-decoration-none dropdown-toggle" id="dropdownNavLink" data-bs-toggle="dropdown" aria-expanded="false">
                Theme Gallery
              </a>
              <ul className="dropdown-menu dropdown-menu-horizontal full-width row" aria-labelledby="dropdownNavLink">
                <div className="dropdown-column col-2">
                  <h6 className="dropdown-header">Tokyo Series</h6>
                  <li><a className="dropdown-item" href="/tokyo-series/pastel">Pastel</a></li>
                  <li><a className="dropdown-item" href="/tokyo-series/sakura">Sakura</a></li>
                  <li><a className="dropdown-item" href="/tokyo-series/clouds">Cloulds</a></li>
                  <li><a className="dropdown-item" href="/tokyo-series/neons">Neons</a></li>
                  <li><a className="dropdown-item" href="/tokyo-series/white-noise">White Noise</a></li>
                </div>
                <div className="dropdown-column col-2">
                  <h6 className="dropdown-header">The Great Silence</h6>
                  <li><a className="dropdown-item" href="/the-great-silence/hydrogen-clouds">Hydrogen Clouds</a></li>
                  <li><a className="dropdown-item" href="/the-great-silence/starglow">Starglow</a></li>
                  <li><a className="dropdown-item" href="/the-great-silence/atmosphere">Atmosphere</a></li>
                  <li><a className="dropdown-item" href="/the-great-silence/nebula">Nebula</a></li>
                  <li><a className="dropdown-item" href="/the-great-silence/ice-giant">Ice Giant</a></li>
                </div>
                <div className="dropdown-column continuous col-2">
                  <h6 className="dropdown-header">Landscapes</h6>
                  <li><a className="dropdown-item" href="/landscapes/dolomites">Dolomites</a></li>
                  <li><a className="dropdown-item" href="/landscapes/esperance-beach">Esperance Beach</a></li>
                  <li><a className="dropdown-item" href="/landscapes/faroe-islands">Faroe Islands</a></li>
                  <li><a className="dropdown-item" href="/landscapes/glacier-national-park">Glacier National Park</a></li>
                  <li><a className="dropdown-item" href="/landscapes/lake-hawea">Lake Hāwea</a></li>
                </div>
                <div className="dropdown-column continuous col-2">
                  <h6 className="dropdown-header">&nbsp;</h6>
                  <li><a className="dropdown-item" href="/landscapes/kauai">Kauai</a></li>
                  <li><a className="dropdown-item" href="/landscapes/island-of-senja">Island of Senja</a></li>
                  <li><a className="dropdown-item" href="/landscapes/mizar-and-alcor">Mizar &amp; Alcor</a></li>
                  <li><a className="dropdown-item" href="/landscapes/mono-lake">Mono Lake</a></li>
                  <li><a className="dropdown-item" href="/landscapes/sedona-peaks">Sedona Peaks</a></li>
                </div>
                <div className="dropdown-column col-2">
                  <h6 className="dropdown-header">&nbsp;</h6>
                  <li><a className="dropdown-item" href="/landscapes/ha-long-bay">Ha Long Bay</a></li>
                  <li><a className="dropdown-item" href="/landscapes/yosemite-national-park">Yosemite National Park</a></li>
                </div>
                <div className="dropdown-column col-2">
                  <h6 className="dropdown-header">Botanicals</h6>
                  <li><a className="dropdown-item" href="/botanicals/camellia">Camellia</a></li>
                  <li><a className="dropdown-item" href="/botanicals/freesia">Freesia</a></li>
                  <li><a className="dropdown-item" href="/botanicals/hydrangea">Hydrangea</a></li>
                  <li><a className="dropdown-item" href="/botanicals/sakura">Sakura</a></li>
                  <li><a className="dropdown-item" href="/botanicals/wisteria">Wisteria</a></li>
                  <li><a className="dropdown-item" href="/botanicals/lily-of-the-valley">Lily of the Valley</a></li>
                  <li><a className="dropdown-item" href="/botanicals/mango-tulip">Mango Tulip</a></li>
                  <li><a className="dropdown-item" href="/botanicals/delphinium">Delphinium</a></li>
                  <li><a className="dropdown-item" href="/botanicals/sunflower">Sunflower</a></li>
                  <li><a className="dropdown-item" href="/botanicals/forget-me-not">Forget Me Not</a></li>
                  <li><a className="dropdown-item" href="/botanicals/night-sky-petunia">Night Sky Petunia</a></li>
                  <li><a className="dropdown-item" href="/botanicals/lagrass">Lagrass</a></li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
