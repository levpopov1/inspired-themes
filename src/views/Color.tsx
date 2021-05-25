import React from 'react';
import ColorSection from '../components/ColorSection';
import { iTheme } from '../interfaces';

interface Props {
  theme: iTheme
}

const Color: React.FC<Props> = ({theme}) => {
  return (
    <div className="router-view-color">
      <div className="container-fluid">
        <ColorSection theme={theme}/>
      </div>
    </div>
  );
}

export default Color;
