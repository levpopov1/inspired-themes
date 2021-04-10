function InspoImage({theme}) {
  return (
    <div className="d-flex flex-column">
      <div className="card mb-2">
        <img src={theme.image} className="card-img" alt={"Image of " + theme.name}/>
        <div className="card-img-overlay d-flex">
          <div className="card flex-grow-1 mt-auto">
            <div className="card-body">
              <h5 className="card-title">{theme.name}</h5>
              <p className="card-text">
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InspoImage;
