function ColorRow({color}) {
  return (
    <div className="row" style={{ backgroundColor: color.hex }}>
      <div className="col-sm-4">
        <h2 className="title">{color.name}</h2>
      </div>
    </div>
  );
}

export default ColorRow;
