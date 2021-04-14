import TypographyBlock from './TypographyBlock'
import TypographyInfo from './TypographyInfo'

function TypographyRow({theme, font, getContrast, showInfo}) {
  return (
    <div className="row mb-3 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-3 row-cols-xxxl-3 row-cols-uhd-6">
      <TypographyInfo showInfo={showInfo}/>
      {Object.keys(theme.colors).map((key, index) => 
        <TypographyBlock color={theme.colors[key]} font={font} getContrast={getContrast} key={index}/>
      )}
    </div>
  );
}

export default TypographyRow;
