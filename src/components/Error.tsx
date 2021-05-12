import React from 'react';
import { useState } from 'react';

function Error({message, type}) {

  const [visibility, setVisibility] = useState(true);

  return (
    <div className="d-flex justify-content-center">
      <div className="col-sm-8 col-md-6 col-lg-4">
        <div className={`card text-dark bg-${type ? type : "light"} my-3 ${visibility ? "d-block" : "d-none"}`}>
          <div className="card-body d-flex flex-row justify-content-between">
            <p className="card-text mb-0">
              {message}
            </p>
            <button type="button" className="btn-close" aria-label="Close" onClick={() => setVisibility(false)}></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
