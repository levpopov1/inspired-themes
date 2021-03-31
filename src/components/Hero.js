function Hero({theme}) {
  let heroImage = {
    background: 'url(' + theme.image + ') center center no-repeat',
    backgroundSize: 'cover'
  }

  return (
    <div className="hero d-flex flex-column justify-content-between mb-3" style={heroImage}>
      <div className="row  g-0 justify-content-center">
        <div className="col-12 col-md-6 justify-content-center mb-2 mb-md-0">
          <form className="w-100 my-4 shadow-lg">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Paste image URL here" aria-label="Paste Twitter URL here" aria-describedby="button-addon"/>
              <button className="btn btn-primary" type="button" id="button-addon">Generate</button>
            </div>
          </form>
        </div>
      </div>
      <div className="row g-0 ">
        <div className="col-sm-8 col-md-6">
          <div className="p-2 ms-2">
            {/* <h1 className="display-1 text-shadow">{ theme.name }</h1>
            <h3 className="subtitle fst-italic fw-bold text-shadow">{ theme.collection }</h3> */}
          </div>
        </div>
      </div>

      {/* <div className="col-md-3">
        <div className="card">
          <img src={theme.image} className="card-img-top" alt={'Image of ' + theme.name }/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Hero;
