import ContrastRatioGauge from "./ContrastRatioGauge";

function ColorBlock({color, getContrastRatio, rowColor}) {

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
      <div className="card h-100" style={{ border: `1px solid ${color.hex}`, backgroundColor: "transparent", color: color.hex }}>
        <div className="card-header">
          <ContrastRatioGauge value={contrastRatio}/>
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
