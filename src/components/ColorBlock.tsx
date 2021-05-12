import React from 'react';
import { useState, useEffect } from 'react';
import getContrastRatio from '../lib/getContrastRatio';

function ColorBlock({color, rowColor}) {

  const [wcagAA, setWcagAA] = useState(false);
  const [wcagAAA, setWcagAAA] = useState(false);

  let contrastRatio = getContrastRatio(rowColor.hex, color.hex);

  useEffect(() => {
    if(contrastRatio >= 7){
      setWcagAA(true);
      setWcagAAA(true);
    }
    else if(contrastRatio >= 3.5){
      setWcagAA(true);
      setWcagAAA(false);
    }
    else{
      setWcagAA(false);
      setWcagAAA(false);
    }
    return () => {
      setWcagAA(false);
      setWcagAAA(false);
    }
  }, [contrastRatio]);


  let advice = "";

  if(contrastRatio >=12){
    advice = `${color.name} and ${rowColor.name} is the best pairing.`;
  }
  else if(contrastRatio >= 7){
    advice = `${color.name} works well as a foreground color on a ${rowColor.name} color background.`;
  }
  else if(contrastRatio >= 3.5){
    advice = `${color.name} has a low contrast ratio on a ${rowColor.name} color background. 
    Only use this for fonts larger than 24px or large block elements.`;
  }
  else{
    advice = `${color.name} is almost invisible on a ${rowColor.name} color background, 
    especially for people with visual impairments. 
    Do not use this pairing.`;
  }

  return (
    <div className="col-sm-6 col-lg-3 mb-4">
      <div className="card colorPair h-100 mb-2" style={{ backgroundColor: rowColor.hex, color: color.hex }}>
        <div className="card-body">
          <h1 className="display-2 fw-bold">{contrastRatio}</h1>
          <h3 className="card-title">{color.name} on {rowColor.name}</h3>
          <p className="card-text">
            {advice}
          </p>
        </div>
        <div className="card-body d-flex flex-column justify-content-end">
          <p className={`card-text mb-0 ${wcagAAA ? "" : "text-decoration-line-through"}`}>
            WCAG AAA
            {wcagAAA && <i className="bi bi-check-circle-fill ms-2"></i>}
          </p>
          <p className={`card-text ${wcagAA ? "" : "text-decoration-line-through"}`}>
            WCAG AA
            {wcagAA && <i className="bi bi-check-circle-fill ms-2"></i>}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ColorBlock;
