import ColorBlock from './ColorBlock';

function ColorRow({color, theme, getContrastRatio}) {
  return (
    <div className="row justify-content-end" style={{ backgroundColor: color.hex }}>
      <div className="col-sm-12">
        <h2 className="title my-3">{color.name}</h2>
      </div>
      {Object.keys(theme.colors).map(function(colorKey, index){
        if(colorKey !== color.name.toLowerCase()){
          let contrastRatio = getContrastRatio(color.hex, theme.colors[colorKey].hex);
          return <ColorBlock key={index} color={theme.colors[colorKey]} contrastRatio={contrastRatio} rowColor={color}/>
        }
      })}
    </div>
  );
}

export default ColorRow;
