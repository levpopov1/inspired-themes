import ButtonBlock from './ButtonBlock'

function ButtonRow({theme}) {
  return (
    <div className="row mb-3 row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
      {Object.keys(theme.colors).map((key, index) => 
        <ButtonBlock color={theme.colors[key]} key={index}/>
      )}
      
    </div>
  );
}

export default ButtonRow;
