import { useState } from 'react';
import TypographyHeader from './TypographyHeader';
import TypographyRow from './TypographyRow';
import getContrast from '../lib/getContrast';

function TypographySection({theme}) {

  const [font, setFont] = useState('sans-serif');
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <TypographyHeader font={font} setFont={setFont} showInfo={showInfo} setShowInfo={setShowInfo}/>
      <TypographyRow theme={theme} font={font} getContrast={getContrast} showInfo={showInfo}/>
    </>
  );
}

export default TypographySection;
