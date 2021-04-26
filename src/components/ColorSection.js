import { useState } from 'react';
import ColorRow from './ColorRow';
import WCAGinfo from './WCAGinfo';

function ColorSection({theme}) {

  const [showWCAGinfo, setshowWCAGinfo] = useState(false);

  return (
    <div className="section-container">
      <div className="row">
        <div className="col-sm-6">
          <h2 className="title my-3">Pairings</h2>
          <p className="text">
            Color parings and their corresponding contrast ratios for your chosen theme.
            TODO: Replace button on the right with "Read more" link that reveals the rest of the text.
          </p>
        </div>
        <div className="col-sm-6 d-flex justify-content-end align-items-center">
          <button className={`btn btn-outline ${showWCAGinfo ? "active" : ""}`} onClick={() => setshowWCAGinfo(!showWCAGinfo)}>
            <i className="bi-info-circle"></i>
            <span className="ms-2">About WCAG Ratings</span>
          </button>
        </div>
      </div>
      <div className="row">
        <WCAGinfo showWCAGinfo={showWCAGinfo}/>
      </div>
      {Object.keys(theme.colors).map((colorKey, index) =>  
        <ColorRow color={theme.colors[colorKey]} theme={theme} key={index}/>
      )}
    </div>
  );
}

export default ColorSection;
