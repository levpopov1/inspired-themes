import React from 'react';
import { iColor } from '../interfaces';

interface Props {
  color: iColor
}

const PaletteBlock: React.FC<Props> = ({color}) => {
  return (
    <div className="col-12 col-md d-flex d-md-block flex-row flex-md-column align-items-center justify-content-between">
      <div className="palette-block mb-md-2" style={{ backgroundColor: color.hex }}></div>
      <div className="colorData w-100 d-flex d-md-block flex-row flex-md-column align-items-center justify-content-between">
        <h3 className="card-title text-center ms-2 ms-md-0">{ color.name || "undefined" }</h3>
        <p className="card-text text-center d-block">
          <code className="code css d-block">
              { color.hex || "undefined" }
          </code>
        </p>
        {/* <p className="card-text text-center d-none d-xxl-block">
          <code className="code css d-block">
              { color.rgb || "undefined" }
          </code>
        </p> */}
        {/* <p className="card-text text-center d-none d-xxl-block">
          <code className="code css d-block">
              { color.hsl || "undefined" }
          </code>
        </p> */}
      </div>
    </div>
  );
}

export default PaletteBlock;
