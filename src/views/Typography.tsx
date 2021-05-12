import React from 'react';
import TypographySection from '../components/TypographySection';

const Typography: React.FC = ({theme}) => {
  return (
    <div className="router-view-typography">
      <div className="container-fluid">
        <TypographySection theme={theme}/>
      </div>
    </div>
  );
}

export default Typography;
