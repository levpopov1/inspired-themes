function ColorBlock({color}) {
  return (
    <div className="col mb-3">
      {/* <div className="card">
        <div className="row g-0">
          <div className="col-3 col-sm-12 col-xxxl-3">
            <div className="color-block" style={{ backgroundColor: color.hex }}></div>
          </div>
          <div className="col-9 col-sm-12 col-xxxl-9">
            <div className="card-body">
              <h3 className="card-title m-0">{ color.name }</h3>
            </div>
            <div className="card-body">
              <p className="card-text">
                <code className="code css d-block">
                    { color.hex }
                </code>
              </p>
              <p className="card-text">
                <code className="code css d-block">
                    { color.rgb }
                </code>
              </p>
              <p className="card-text">
                <code className="code css d-block">
                  { color.hsl }
                </code>
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="card color-block" style={{ backgroundColor: color.hex }}>
        <div className="card-img-overlay d-flex">
          <div className="card bg-light text-dark mt-auto flex-grow-1">
            <div className="card-body ">
              <h3 className="card-title">{ color.name }</h3>
              <p className="card-text">
                <code className="code css d-block">
                    { color.hex }
                </code>
              </p>
              <p className="card-text">
                <code className="code css d-block">
                    { color.rgb }
                </code>
              </p>
              <p className="card-text">
                <code className="code css d-block">
                  { color.hsl }
                </code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorBlock;
