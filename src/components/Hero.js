function Hero({theme}) {
  return (
    <div className="hero row my-3">
      <div className="col-sm-8 col-md-6">
        <h1 className="display-1">{ theme.name }</h1>
        <h3 className="subtitle">{ theme.collection }</h3>
      </div>
      <div className="col-md-3">
        <div className="card">
          <img src={theme.image} className="card-img-top" alt={'Image of ' + theme.name }/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
