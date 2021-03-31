function ColorBlock({color}) {
  return (
    <div className="col mb-3">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-2 col-lg-12">
            <div className="color-block" style={{ backgroundColor: color.hex }}></div>
          </div>
          <div className="col-md-10 col-lg-12">
            <div className="card-body">
              <h3 className="card-title m-0">{ color.name }</h3>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <b className="color-code me-3 align-self-center">HEX:</b> 
                <code className="code css flex-grow-1">
                  { color.hex }
                </code>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <b className="color-code me-3 align-self-center">RGB:</b> 
                <code className="code css flex-grow-1">
                  { color.rgb }
                </code>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <b className="color-code me-3 align-self-center">HSL:</b> 
                <code className="code css flex-grow-1">
                  { color.hsl }
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorBlock;
