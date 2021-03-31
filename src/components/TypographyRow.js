import TypographyBlock from './TypographyBlock'

function TypographyRow({theme}) {
  return (
    <div className="row mb-3 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 row-cols-xxxl-5">
      {Object.keys(theme.colors).map((key, index) => 
        <TypographyBlock color={theme.colors[key]} key={index}/>
      )}
    </div>
  );
}

export default TypographyRow;
