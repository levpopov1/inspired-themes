import ColorBlock from './ColorBlock';

function ColorRow({color, theme, getContrastRatio}) {

  // let contrastRatio = 0;

  return (
    <div className="row justify-content-end" >
      <div className="col-sm-12">
        <h2 className="title my-3">{color.name}</h2>
      </div>
      {Object.keys(theme.colors).map(function(colorKey, index){
        if(colorKey !== color.name.toLowerCase()){
          // contrastRatio = getContrastRatio(color.hex, theme.colors[colorKey].hex);
          return <ColorBlock key={index} color={theme.colors[colorKey]} getContrastRatio={getContrastRatio} rowColor={color}/>
        }
      })}
    </div>
  );
}

export default ColorRow;
