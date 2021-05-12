import React from 'react';
import { useState, useRef } from 'react';

function WCAGinfo() {

  const [readMoreButtonText, setreadMoreButtonText] = useState("more");
  const overflowBox = useRef(null);

  const showText = () => {
    overflowBox.current.classList.toggle("show");
    if(readMoreButtonText === "more"){
      setreadMoreButtonText("less");
    }
    else{
      setreadMoreButtonText("more");
    }
  }

  return (
    <div className="wcag-info read-more">
      <div className="row overflow-text" ref={overflowBox}>
        <div className="col-sm-4 col-xl-3 col-uhd-2">
          <h2 className="title my-3">Pairings</h2>
          <p className="text">
            You can combine colors in your theme to make pairings that will form the basis for your design.
            However, while some colors in your theme will pair together really well, others will not.
          </p>
          <p className="text">
            The matrix below shows all possible color pairs in your chosen theme.
            Each pair is given a score between 1 on the low end, and 21 on the high end. 
            This score is the contrast ratio of the two colors, and is given a rating 
            of <strong>AAA</strong> or <strong>AA</strong> as defined 
            in the <a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html" className="link-info" target="_blank" rel="noreferrer">Web Content Accessibility Guidelines</a> (WCAG) documentation. 
          </p>
          <p className="text">
            The scoring criteria is described below but put simply, the higher the score, the better those colors go together.
          </p>
        </div>
        <div className="col-sm-4 col-xl-3 col-uhd-2">
          <h2 className="title my-3">Scoring Criteria</h2>
          <p className="text">
            The <strong>AAA</strong> rating is achieved when the contrast ratio is greater than 7 for normal sized text (font-size: 16px or 1em) 
            and greater than 4.5 for large text (font-size: 24px or 1.5em).
          </p>
          <p className="text">
            The <strong>AA</strong> rating is achieved when the contrast ratio is greater than 4.5 for normal sized text (font-size: 16px or 1em)
            and greater than 3 for large text (font-size: 24px or 1.5em).
          </p>
          <p className="text">
            A contrast ratio of less than 3 is considered a fail by WCAG and should therefore NEVER be used.
            Even people with perfect vision will struggle to read text with such low contrast.
          </p>
        </div>
        <div className="col-sm-4 col-xl-3 col-uhd-2">
          <h2 className="title my-3">Summary</h2>
          <p className="text">
            You should always aim to use color pairs that pass the <strong>WCAG AAA</strong> rating to provide the best user experience.
            Color pairs that only pass the <strong>AA</strong> rating are not as good but can still be used in some cases.
            Do keep in mind though, that people with poor vision or some color blindesses 
            will struggle to read text in the <strong>AA</strong> range, so if you choose to use these colors
            make sure to use a large font, ideally 24px or greater.
          </p>
        </div>
        <div className="overflow-shade"></div>
      </div>
      <div className="text-center mb-5">
        <button className="btn btn-link" onClick={showText}>Read {readMoreButtonText}</button>
      </div>
    </div>
  );
}

export default WCAGinfo;