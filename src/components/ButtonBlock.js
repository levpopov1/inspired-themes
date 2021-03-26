function ButtonBlock({color}) {
  return (
    <div className="col d-flex flex-column mb-3">
      <button type="button" className="btn mb-2" style={{ backgroundColor: color.hex }}>
        Example Button
      </button>
      <button type="button" className="btn mb-2" style={{ borderColor: color.hex }}>
        Example Button
      </button>
    </div>
  );
}

export default ButtonBlock;
