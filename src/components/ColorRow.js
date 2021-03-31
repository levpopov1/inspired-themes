import ColorBlock from './ColorBlock'

function ColorRow({theme}) {
  return (
    <div className="row mb-3 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
      {Object.keys(theme.colors).map((key, index) => 
        <ColorBlock color={theme.colors[key]} key={index}/>
      )}
      
    </div>
  );
}

export default ColorRow;
