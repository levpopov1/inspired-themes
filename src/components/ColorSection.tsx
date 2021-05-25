import React from 'react';
import WCAGinfo from './WCAGinfo';
import ColorRow from './ColorRow';
import { iTheme } from '../interfaces';

interface Props {
  theme: iTheme
}

const ColorSection: React.FC<Props> = ({theme}) => {
  return (
    <>
      <WCAGinfo/>
      {Object.keys(theme.colors).map((colorKey, index) =>  
        <ColorRow color={theme.colors[colorKey]} theme={theme} key={index}/>
      )}
    </>
  );
}

export default ColorSection;
