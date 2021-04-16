function ColorBlock({color}) {
  return (
    <div className="col-sm-2">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{color.name}</h5>
          <h5 className="card-title">Contrast Ratio</h5>
          <p className="card-text">
            Do not use this color combo. 
            because the ratio is lower than 7:1 
            so it will have poor visibility.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ColorBlock;
