function PaletteBlock({color}) {
  return (
    <div className="col">
      <div className="palette-block mb-2" style={{ backgroundColor: color.hex }}></div>
      <div className="colorData">
        <h3 className="card-title text-center">{ color.name || "undefined" }</h3>
        <p className="card-text text-center">
          <code className="code css d-block">
              { color.hex || "undefined" }
          </code>
        </p>
        <p className="card-text text-center">
          <code className="code css d-block">
              { color.rgb || "undefined" }
          </code>
        </p>
        {/* <p className="card-text">
          <code className="code css d-block">
            { color.hsl }
          </code>
        </p> */}
      </div>
    </div>
  );
}

export default PaletteBlock;
