import ColorBlock from './ColorBlock';

function ColorRow({color, theme, contrastRatio}) {
  return (
    <div className="row" style={{ backgroundColor: color.hex }}>
      <div className="col-sm-4">
        <h2 className="title">{color.name}</h2>
      </div>
      {Object.keys(theme.colors).map(function(colorKey, index){
        if(colorKey !== color.name.toLowerCase()){
          return (
            <ColorBlock key={index} color={theme.colors[colorKey]}/>
          )
        }
      })}
    </div>
  );
}

export default ColorRow;
