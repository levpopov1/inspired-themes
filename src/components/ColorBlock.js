import { useState, useEffect } from 'react';
import ContrastRatioGauge from "./ContrastRatioGauge";
import getContrast from '../lib/getContrast';

function ColorBlock({color, getContrastRatio, rowColor}) {

  const [contrastColor, setContrastColor] = useState('light');

  useEffect(() => {
    setContrastColor(getContrast(rowColor.hex));
  }, [rowColor]);

  let contrastRatio = getContrastRatio(rowColor.hex, color.hex);

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
    <div className="col-md-6 col-xl-3 col-xxxl-2 mb-3">
      <div className="card h-100" style={{ backgroundColor: rowColor.hex, color: color.hex }}>
        <div className="card-header">
          <ContrastRatioGauge value={contrastRatio} contrastColor={contrastColor}/>
        </div>
        <div className="card-body">
          <h5 className="card-title">{color.name}</h5>
          <p className="card-text">
            {advice}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ColorBlock;
