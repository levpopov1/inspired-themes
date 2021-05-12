import React from 'react';
import ColorSection from '../components/ColorSection';

function Color({theme}) {
  return (
    <div className="router-view-color">
      <div className="container-fluid">
        <ColorSection theme={theme}/>
      </div>
    </div>
  );
}

export default Color;
