import React from 'react';
import { iColor, iTheme } from '../interfaces';
import ColorBlock from './ColorBlock';

interface Props {
  color: iColor,
  theme: iTheme
}

const ColorRow: React.FC<Props> = ({color, theme}) => {
  return (
    <div className="row" >
      {Object.keys(theme.colors).map(function(colorKey, index){
        if(colorKey === color.name.toLowerCase()){
          return null;
        }
        return <ColorBlock key={index} color={theme.colors[colorKey]} rowColor={color}/>
      })}
    </div>
  );
}

export default ColorRow;
