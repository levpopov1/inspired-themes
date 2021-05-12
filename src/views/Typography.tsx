import React from 'react';
import TypographySection from '../components/TypographySection';
import { iTheme } from '../interfaces';

interface Props {
  theme: iTheme
}

const Typography: React.FC<Props> = ({theme}) => {
  return (
    <div className="router-view-typography">
      <div className="container-fluid">
        <TypographySection theme={theme}/>
      </div>
    </div>
  );
}

export default Typography;
