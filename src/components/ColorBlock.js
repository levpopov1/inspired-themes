function ColorBlock({color}) {
  return (
    <div className="col mb-3">
      <div className="card">
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
                {/* <b className="color-code me-3 d-block">HEX</b>  */}
                <code className="code css d-block">
                    { color.hex }
                </code>
              </p>
              <p className="card-text">
                {/* <b className="color-code me-3 d-block">RGB</b>  */}
                <code className="code css d-block">
                    { color.rgb }
                </code>
              </p>
              <p className="card-text">
                {/* <b className="color-code me-3 d-block">HSL</b>  */}
                <code className="code css d-block">
                  { color.hsl }
                </code>
              </p>

              {/* <div className="d-flex flex-column mb-2">
                <b className="color-code me-3 align-self-center">HEX:</b> 
                <code className="code css flex-grow-1">
                  { color.hex }
                </code>
              </div>
              <div className="d-flex flex-column mb-2">
                <b className="color-code me-3 align-self-center">RGB:</b> 
                <code className="code css flex-grow-1">
                  { color.rgb }
                </code>
              </div>
              <div className="d-flex flex-column mb-2">
                <b className="color-code me-3 align-self-center">HSL:</b> 
                <code className="code css flex-grow-1">
                  { color.hsl }
                </code>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorBlock;
