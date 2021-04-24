import ColorRow from './ColorRow';

function ColorSection({theme}) {
  return (
    <div className="section-container">
      <div className="row">
        <div className="col-sm-8 col-md-6 col-xxxl-4 col-uhd-3">
          <h2 className="title my-3">Pairings</h2>
          <p className="text">
            You can combine colors in your theme to make pairings that will form the basis for your design.
            However, while some colors in your theme will pair together really well, others will not.
          </p>
          <p className="text">
            The matrix below shows all possible color pairs in your chosen theme.
            Each pair is given a score between 1 on the low end, and 21 on the high end. 
            This score is the contrast ratio between the two colors, as defined in the
            Web Content Accessibility Guidelines (WCAG) documentation. 
            The higher the score, the better those colors go together.
          </p>
          <p className="text">
            You should always aim to use pairings that have a score of 7 or greater, 
            as that is the WCAG AAA standard of good contrast ratio for normal sized text.  
          </p>
          <p className="text">
            A score above 4.5 
          </p>
          <p className="text">
            Scores between 3 and 7 are not as good, but can still be used in some cases.
            A contrast ratio of 3 is the absolute minimum required to meet the WCAG AA standard.
            Do keep in mind though, that people with poor vision or some color blindesses 
            will struggle to read text in this range, so make sure to use a large font, ideally 24px or greater.
          </p>
          <p className="text">
            A contrast ratio of less than 3 is considered a fail by WCAG and should therefore NEVER be used.
            Even people with perfect vision will struggle to read text with such a low contrast.
          </p>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Score of 7 or greater</h5>
              <p className="card-text">
                WCAG AAA : PASS
              </p>
              <p className="card-text">
                Good for normal sized text
              </p>
            </div>
          </div>
        </div>
      </div>
      {Object.keys(theme.colors).map((colorKey, index) =>  
        <ColorRow color={theme.colors[colorKey]} theme={theme} key={index}/>
      )}
    </div>
  );
}

export default ColorSection;
