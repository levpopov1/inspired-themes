import ColorBlock from './ColorBlock'

function ColorRow({theme}) {
  return (
    <div className="row my-3 row-cols-md-2 row-cols-lg-2 row-cols-xl-3">
      {Object.keys(theme.colors).map((key, index) => 
        <ColorBlock color={theme.colors[key]} key={index}/>
      )}
      
    </div>
  );
}

export default ColorRow;