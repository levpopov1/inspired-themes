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
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-xl-6 justify-content-center mb-2 mb-md-0">
            <form className="w-100 my-3 shadow-lg">
              <div className="input-group">
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
