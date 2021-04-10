function Accordion({theme}) {
  return (
    <div className="container-fluid g-0">
      <div className="d-flex flex-row justify-content-end" id="vac">
        <div className="d-flex flex-row align-items-stretch vac-section">
          <div className="section-title">
            <a className="display-3 h-100 block-link text-decoration-none" data-bs-toggle="collapse" data-bs-target="#s0" href="#s0" role="button" aria-expanded="true" aria-controls="s0">
              <span className="d-block ms-md-2">Welcome to the website</span>
            </a>
          </div>
          <div className="section-content collapse show width" id="s0" data-bs-parent="#vac">
            <div className="row">
              <div className="col-sm-6 mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Velit tempora id consectetur reiciendis maiores ipsa error architecto voluptate aut deserunt?
                <h1 className="display-3">tse</h1>
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
        <div className="d-flex flex-row align-items-stretch vac-section">
          <div className="section-title">
            <a className="display-3 h-100 block-link text-decoration-none" data-bs-toggle="collapse" data-bs-target="#s1" href="#s1" role="button" aria-expanded="false" aria-controls="s1">
              <span className="d-block ms-md-2">Primary</span>
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
        <div className="d-flex flex-row align-items-stretch vac-section">
          <div className="section-title">
            <a className="display-3 h-100 block-link text-decoration-none" data-bs-toggle="collapse" data-bs-target="#s2" href="#s2" role="button" aria-expanded="false" aria-controls="s2">
              <span className="d-block ms-md-2">Secondary</span>
            </a>
          </div>
          <div className="section-content collapse width" id="s2" data-bs-parent="#vac">
            <div className="row">
              <div className="col-sm-6 mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Velit tempora id consectetur reiciendis maiores ipsa error architecto voluptate aut deserunt?
                <h1 className="display-3">tse</h1>
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
        <div className="d-flex flex-row align-items-stretch vac-section">
          <div className="section-title">
            <a className="display-3 h-100 block-link text-decoration-none" data-bs-toggle="collapse" data-bs-target="#s3" href="#s3" role="button" aria-expanded="false" aria-controls="s3">
              <span className="d-block ms-md-2">Accent</span>
            </a>
          </div>
          <div className="section-content collapse width" id="s3" data-bs-parent="#vac">
            <div className="row">
              <div className="col-sm-6 mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Velit tempora id consectetur reiciendis maiores ipsa error architecto voluptate aut deserunt?
                <h1 className="display-3">tse</h1>
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
