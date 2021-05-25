import React from 'react';
import { SetStateAction } from 'react';

interface Props {
  font: string,
  setFont: React.Dispatch<SetStateAction<string>>,
  showInfo: boolean,
  setShowInfo: React.Dispatch<SetStateAction<boolean>>
}

const TypographyHeader: React.FC<Props> = ({font, setFont, showInfo, setShowInfo}) => {
  return(
    <div className="row">
      <div className="col-sm-4 my-3">
        <h1 className="fs-1">Fonts</h1>
        <p className="text">
          Use the switch on the right to preview how different fonts would look with your theme. 
        </p>
      </div>
      <div className="col-sm-8 my-3 d-flex flex-column flex-md-row justify-content-end align-items-center">
        <button type="button" className={`btn btn-outline me-2 mb-3 mb-md-0 ${showInfo ? "active" : ""}`} onClick={() => setShowInfo(!showInfo)}>
          <i className="bi-info-circle"></i>
          <span className="ms-2">{showInfo ? "Hide" : "Show"} Info</span>
        </button>
        <div className="btn-group d-block" role="group" aria-label="Basic outlined example">
          <button type="button" className={`btn btn-outline ${font === "sans-serif" ? "active" : ""}`} onClick={() => setFont("sans-serif")}>
            Sans-serif
          </button>
          <button type="button" className={`btn btn-outline ${font === "serif" ? "active" : ""}`} onClick={() => setFont("serif")}>
            &nbsp; Serif &nbsp;
          </button>
          <button type="button" className={`btn btn-outline ${font === "monospace" ? "active" : ""}`} onClick={() => setFont("monospace")}>
            Monospace
          </button>
        </div>
      </div>
    </div>
  );
}

export default TypographyHeader;