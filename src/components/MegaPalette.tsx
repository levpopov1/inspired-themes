import React from 'react';
import PaletteBlock from "./PaletteBlock";

function MegaPalette({theme}) {
  return (
    <div className="megapalette row row-cols-5">
      {Object.keys(theme.colors).map((key, index) => 
        <PaletteBlock color={theme.colors[key]} key={index}/>
      )}
    </div>
  );
}

export default MegaPalette;
