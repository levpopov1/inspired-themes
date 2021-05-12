import React from 'react';
import { useState, useEffect } from 'react';
import getContrast from '../lib/getContrast';
import MegaPalette from './MegaPalette';

const ThemeOverview: React.FC = ({theme}) => {

  const [contrastColor, setContrastColor] = useState("dark");

  useEffect(() => {
    setContrastColor(getContrast(theme.colors.primary.hex));
  }, [theme.colors.primary.hex]);

  const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolore, eos est odio ipsum omnis? Ab exercitationem beatae delectus, est inventore deserunt ullam sunt ratione officiis, doloribus sint, quisquam modi."

  return (
    <>
    <div className={`row my-auto justify-content-start text-${contrastColor}`}>
      <div className="col-sm-12 col-md-8 col-xl-8 col-xxl-6 col-xxxl-4 col-uhd-3 offset-md-2 offset-xxl-1 offset-xxxl-3 offset-uhd-3 mb-3">
        <h1 className="display-1 fw-bold">
          {theme.name}
        </h1>
        <p className="lead fs-1">
          {theme.collectionName}
        </p>
        <p className="text fs-5">
          {theme.description || lorem}
        </p>
      </div>
    </div>
    <div className="row mb-5 justify-content-center">
      <div className="col-sm-11 col-md-11 col-lg-8 col-xl-10 col-xxl-10 col-xxxl-7 col-uhd-6">
        <MegaPalette theme={theme}/>
      </div>
    </div>
    </>
  );
}

export default ThemeOverview;
