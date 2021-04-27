import { useState, useEffect } from 'react';
import ColorSection from './ColorSection';
import MegaPalette from "./MegaPalette";
import ThemeGallery from './ThemeGallery';
import TypographySection from './TypographySection';
import getContrast from '../lib/getContrast';
import { toggleDisplayState } from '../lib/handleVacCollapse';

function Accordion({theme, collections, setTheme}) {

  const [contrastColor, setContrastColor] = useState("dark");

  useEffect(() => {
    setContrastColor(getContrast(theme.colors.highlight.hex));
  }, [theme.colors.highlight.hex]);

  let image = {
    background: 'url(' + theme.image + ') center / cover no-repeat'
  }

  return (
    <div className="container-fluid g-0">
      <div className="d-flex flex-row justify-content-end" id="vac">
        <div className="d-flex flex-row vac-section open" id="gallery">
          <div className="section-content collapse width show" id="s00" data-bs-parent="#vac">
            <ThemeGallery collections={collections} setTheme={setTheme}/>
          </div>
        </div>
        <div className="d-flex flex-row vac-section" id="overview">
          <div className="section-title d-none d-xl-block">
            <a className="display-5 h-100 block-link text-decoration-none" data-bs-toggle="collapse" data-bs-target="#s0" href="#s0" role="button" aria-expanded="false" aria-controls="s0" onClick={toggleDisplayState}>
              <span className="d-inline-block ms-md-2">Overview</span>
            </a>
          </div>
          <div className="section-content collapse width" id="s0" data-bs-parent="#vac">
            <div className="section-container d-flex flex-column justify-content-between" style={image}>
              <div className={`row my-auto justify-content-start text-${contrastColor}`}>
                <div className="col-sm-12 col-md-8 col-xl-8 col-xxl-6 col-xxxl-4 col-uhd-3 offset-md-2 offset-xxl-1 offset-xxxl-2 offset-uhd-3">
                  <h1 className="display-1 fw-bold">
                    {theme.name}
                  </h1>
                  <p className="lead fs-1">
                    {theme.collection}
                  </p>
                  <p className="text fs-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Enim dolore, eos est odio ipsum omnis? 
                    Ab exercitationem beatae delectus, est inventore deserunt ullam sunt ratione officiis, 
                    doloribus sint, quisquam modi.
                  </p>
                </div>
              </div>
              <div className="row mb-5 justify-content-center">
                <div className="col-sm-11 col-md-8 col-xl-10 col-xxl-10 col-xxxl-8 col-uhd-6">
                  <MegaPalette theme={theme}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row vac-section" id="color">
          <div className="section-title d-none d-xl-block">
            <a className="display-5 h-100 block-link text-decoration-none" data-bs-toggle="collapse" data-bs-target="#s1" href="#s1" role="button" aria-expanded="false" aria-controls="s1" onClick={toggleDisplayState}>
              <span className="d-block ms-md-2">Color</span>
            </a>
          </div>
          <div className="section-content collapse width" id="s1" data-bs-parent="#vac">
            <ColorSection theme={theme}/>
          </div>
        </div>
        <div className="d-flex flex-row vac-section" id="typography">
          <div className="section-title d-none d-xl-block">
            <a className="display-5 h-100 block-link text-decoration-none" data-bs-toggle="collapse" data-bs-target="#s2" href="#s2" role="button" aria-expanded="false" aria-controls="s2" onClick={toggleDisplayState}>
              <span className="d-block ms-md-2">Typography</span>
            </a>
          </div>
          <div className="section-content collapse width" id="s2" data-bs-parent="#vac">
            <TypographySection theme={theme} getContrast={getContrast}/>
          </div>
        </div>
        <div className="d-flex flex-row vac-section" id="layout">
          <div className="section-title d-none d-xl-block">
            <a className="display-5 h-100 block-link text-decoration-none" data-bs-toggle="collapse" data-bs-target="#s3" href="#s3" role="button" aria-expanded="false" aria-controls="s3" onClick={toggleDisplayState}>
              <span className="d-block ms-md-2">Layout</span>
            </a>
          </div>
          <div className="section-content collapse width" id="s3" data-bs-parent="#vac">
            <div className="section-container">
              <div className="row">
                <div className="col-sm-6 mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Velit tempora id consectetur reiciendis maiores ipsa error architecto voluptate aut deserunt?
                  <h1 className="display-5">tse</h1>
                </div>
                <div className="col-sm-6 mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Velit tempora id consectetur reiciendis maiores ipsa error architecto voluptate aut deserunt?
                </div>
                <div className="col-sm-6 mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Velit tempora id consectetur reiciendis maiores ipsa error architecto voluptate aut deserunt?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
