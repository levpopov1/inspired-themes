import { useState } from 'react';
import TypographyHeader from './TypographyHeader';
import TypographyRow from './TypographyRow';

function TypographySection({theme, getContrast}) {

  const [font, setFont] = useState('sans-serif');
  const [showInfo, setShowInfo] = useState(false);


  return (
    <div className="section-container">
      <TypographyHeader font={font} setFont={setFont} showInfo={showInfo} setShowInfo={setShowInfo}/>
      <TypographyRow theme={theme} font={font} getContrast={getContrast} showInfo={showInfo}/>
    </div>
  );
}

export default TypographySection;
