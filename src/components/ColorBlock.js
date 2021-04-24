import { useState, useEffect } from 'react';
import ContrastRatioGauge from "./ContrastRatioGauge";
import getContrast from '../lib/getContrast';
import getContrastRatio from '../lib/getContrastRatio';

function ColorBlock({color, rowColor}) {

  const [contrastColor, setContrastColor] = useState('light');
  const [wcagAA, setWcagAA] = useState("FAIL");
  const [wcagAAA, setWcagAAA] = useState("FAIL");

  let contrastRatio = getContrastRatio(rowColor.hex, color.hex);

  useEffect(() => {
    setContrastColor(getContrast(rowColor.hex));
  }, [rowColor]);

  useEffect(() => {
    if(contrastRatio >= 7){
      setWcagAA("PASS");
      setWcagAAA("PASS");
    }
    else if(contrastRatio >= 3.5){
      setWcagAA("PASS");
      setWcagAAA("FAIL");
    }
    else{
      setWcagAA("FAIL");
      setWcagAAA("FAIL");
    }
    return () => {
      setWcagAA("FAIL");
      setWcagAAA("FAIL");
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
    advice = `${color.name} has a low contrast ratio on a ${rowColor.name} color background. Only use this for fonts larger than 24px or large block elements.`;
  }
  else{
    advice = `${color.name} is almost invisible on a ${rowColor.name} color background. Do not use this pairing.`;
  }

  return (
    <div className="col-md-6 col-xl-3 col-xxxl-2 mb-4">
      <div className="card colorPair h-100" style={{ backgroundColor: rowColor.hex, color: color.hex }}>
        <div className="card-heder">
          <ContrastRatioGauge value={contrastRatio} contrastColor={contrastColor}/>
        </div>
        <div className="card-body">
          <h3 className="card-title">{color.name}</h3>
          <p className="card-text">
            {advice}
          </p>
        </div>
        <div className="card-footer d-flex flex-column justify-content-end">  
          <p className="card-text d-flex justify-content-between mb-1">
            WCAG AAA
            <span className="badge">
              {wcagAAA}
            </span>
          </p>
          <p className="card-text d-flex justify-content-between">
            WCAG AA
            <span className="badge">
              {wcagAA}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ColorBlock;
