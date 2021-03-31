import { useState } from 'react';

function Hero({theme}) {

  let [image, setImage] = useState(theme.image);

  const handleImageChange = (event) => {
    setImage(event.target.value);
  }

  let heroImage = {
    background: 'url(' + (image || theme.image) + ') center / cover no-repeat'
  }

  return (
    <div className="hero d-flex flex-column justify-content-between mb-3" style={heroImage}>
      <div className="container-fluid">
        <div className="row">
          <div className="d-none d-md-block position-relative">
            <button className="btn btn-light my-3 ms-3 shadow" id="sidebar-toggler" 
              data-bs-toggle="collapse" 
              data-bs-target="#sidebar" 
              aria-expanded="true"
              aria-controls="sidebar"
            >
              <i className="bi bi-list"></i>
            </button>
          </div>
          <div className="col-12 col-md-8 col-xl-6 mx-auto">
            <form className="w-100 my-3">
              <div className="input-group shadow">
                <input type="text" className="form-control" placeholder="Paste image URL here" 
                  aria-label="Paste Twitter URL here" aria-describedby="button-addon"
                  onChange={handleImageChange}
                />
                <button className="btn btn-primary" type="button" id="button-addon">Generate</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
