import { useState } from 'react';

function TypographyHeader({userPrefs}){
  const [prefs, setPrefs] = useState(userPrefs);
  const setFont = (font) => (setPrefs({...prefs, font}));

  return(
    <div className="row d-flex justify-content-between">
      <div className="col-sm-6 mb-3 align-items-center justify-content-md-start">
        <h1 className="title">Typography</h1>
      </div>
      <div className="col-sm-6 mb-3 d-flex align-items-center justify-content-md-end">
        <div className="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" className="btn btn-outline-primary" onClick={() => setFont("sans-serif")}>
            Sans-serif
          </button>
          <button type="button" className="btn btn-outline-primary" onClick={() => setFont("serif")}>
            &nbsp; Serif &nbsp;
          </button>
          <button type="button" className="btn btn-outline-primary" onClick={() => setFont("monospace")}>
            Monospace
          </button>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="mb-3">
          <div className="p-3">
            <p className="text m-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Architecto voluptas ad veritatis animi quia quibusdam voluptatum laboriosam quod facere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TypographyHeader;