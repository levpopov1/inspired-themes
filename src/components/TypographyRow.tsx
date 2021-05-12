import React from 'react';
import TypographyBlock from './TypographyBlock';
import TypographyInfo from './TypographyInfo';

interface Props {
  theme: object,
  font: string,
  getContrast: (color: string) => string,
  showInfo: boolean
}

const TypographyRow: React.FC<Props> = ({theme, font, getContrast, showInfo}) => {
  return (
    <div className="row mb-3 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 row-cols-xxxl-5 row-cols-uhd-6">
      <TypographyInfo showInfo={showInfo}/>
      {Object.keys(theme.colors).map((key, index) => 
        <TypographyBlock color={theme.colors[key]} font={font} getContrast={getContrast} key={index}/>
      )}
    </div>
  );
}

export default TypographyRow;
