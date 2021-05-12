import React from 'react';
import WCAGinfo from './WCAGinfo';
import ColorRow from './ColorRow';

const ColorSection: React.FC = ({theme}) => {
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
