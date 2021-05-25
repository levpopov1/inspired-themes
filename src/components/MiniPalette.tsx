import React from 'react';
import { iColor } from '../interfaces';

interface Props {
  colors: {[key: string]: iColor}
}

const MiniPalette: React.FC<Props> = ({colors}) => {
  return (
    <div className="minipalette">
      <div className="palette-block" style={{ backgroundColor: colors["primary"].hex }}></div>
      <div className="palette-block" style={{ backgroundColor: colors["secondary"].hex }}></div>
      <div className="palette-block" style={{ backgroundColor: colors["highlight"].hex }}></div>
      <div className="palette-block" style={{ backgroundColor: colors["dark"].hex }}></div>
      <div className="palette-block" style={{ backgroundColor: colors["light"].hex }}></div>
    </div>
  );
}

export default MiniPalette;
