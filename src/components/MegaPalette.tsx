import React from 'react';
import { iTheme } from '../interfaces';
import PaletteBlock from "./PaletteBlock";

interface Props {
  theme: iTheme
}

const MegaPalette: React.FC<Props> = ({theme}) => {
  return (
    <div className="megapalette row row-cols-5">
      {Object.keys(theme.colors).map((key, index) => 
        <PaletteBlock color={theme.colors[key]} key={index}/>
      )}
    </div>
  );
}

export default MegaPalette;
