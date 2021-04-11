import ColorRow from "./ColorRow";
import InspoImage from "./InspoImage";
import MegaPalette from "./MegaPalette";
import MiniPalette from "./MiniPalette";

const toggleDisplayState = (e) => {
  setTimeout(() => {
    // clear open calss from all .vac-section elements
    let allSections = document.querySelectorAll('#vac .vac-section');
    allSections.forEach(function(item){
      item.classList.remove('open');
    });
  
    // add .open to currently open .vac-section element
    let vacSection = getAncestorByClassName(e.target, "vac-section");
    vacSection.classList.add("open");

    // show the hidden section when all main sections are closed
    let collapsibleSections = document.querySelectorAll('#vac .section-content');
    let shownSections = 0;
    collapsibleSections.forEach(function(item){
      if(item.classList.contains('show')){
        shownSections = shownSections + 1;
      }
    });
    if(shownSections === 0){
      let hiddenSection = document.querySelector('#vac #s00');
      hiddenSection.classList.add('show');
    }
  }, 360);
}

const getAncestorByClassName = (el, target) => {
  while (el && el.parentNode) {
    el = el.parentNode;
    if(el.classList.contains(target)){
      return el;
    }
  }
  return null;
}

function Accordion({theme}) {

  let image = {
    background: 'url(' + theme.image + ') center / cover no-repeat'
  }

  return (
    <div className="container-fluid g-0">
      <div className="d-flex flex-row justify-content-end" id="vac">
        <div className="d-flex flex-row vac-section">
          <div className="section-content collapse width" id="s00" data-bs-parent="#vac">
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
        <div className="d-flex flex-row vac-section open">
          <div className="section-title">
            <a className="display-5 h-100 block-link text-decoration-none" data-bs-toggle="collapse" data-bs-target="#s0" href="#s0" role="button" aria-expanded="true" aria-controls="s0" onClick={toggleDisplayState}>
              <span className="d-block ms-md-2">Welcome to the website</span>
            </a>
          </div>
          <div className="section-content collapse width show" id="s0" data-bs-parent="#vac">
            <div className="imageHeader d-flex flex-column justify-content-between" style={image}>
              <div className="row mb-3">
                <div className="col-sm-6">
                  <h1 className="display-1 fw-bold">
                    {theme.name}
                  </h1>
                  <p className="lead">
                    {theme.collection}
                  </p>
                </div>
              </div>
              <div className="row mb-5 justify-content-center">
                <div className="col-sm-11">
                  <MegaPalette theme={theme}/>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="d-flex flex-row vac-section">
          <div className="section-title">
            <a className="display-5 h-100 block-link text-decoration-none" data-bs-toggle="collapse" data-bs-target="#s1" href="#s1" role="button" aria-expanded="false" aria-controls="s1" onClick={toggleDisplayState}>
              <span className="d-block ms-md-2">Color</span>
            </a>
          </div>
          <div className="section-content collapse width" id="s1" data-bs-parent="#vac">
            <div className="row">
              <div className="col-sm-6 mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Velit tempora id consectetur reiciendis maiores ipsa error architecto voluptate aut deserunt?
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
        <div className="d-flex flex-row vac-section">
          <div className="section-title">
            <a className="display-5 h-100 block-link text-decoration-none" data-bs-toggle="collapse" data-bs-target="#s2" href="#s2" role="button" aria-expanded="false" aria-controls="s2" onClick={toggleDisplayState}>
              <span className="d-block ms-md-2">Typography</span>
            </a>
          </div>
          <div className="section-content collapse width" id="s2" data-bs-parent="#vac">
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
        <div className="d-flex flex-row vac-section">
          <div className="section-title">
            <a className="display-5 h-100 block-link text-decoration-none" data-bs-toggle="collapse" data-bs-target="#s3" href="#s3" role="button" aria-expanded="false" aria-controls="s3" onClick={toggleDisplayState}>
              <span className="d-block ms-md-2">Layout</span>
            </a>
          </div>
          <div className="section-content collapse width" id="s3" data-bs-parent="#vac">
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
  );
}

export default Accordion;
