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
            This score is the contrast ratio of the two colors, and is given a rating of AAA or AA
            as defined in the Web Content Accessibility Guidelines (WCAG) documentation. 
          </p>
          <p className="text">
            You should always aim to use color pairs that pass the WCAG AAA rating to provide the best user experience.
            The scoring criteria is described below but put simply, the higher the score, the better those colors go together.
          </p>
          <p className="text">
            The AAA rating is achieved when the contrast ratio is greater than 7 for normal sized text (font-size: 16px or 1em) 
            and greater than 4.5 for large text (font-size: 24px or 1.5em).
          </p>
          <p className="text">
            The AA rating is achieved when the contrast ratio is greater than 4.5 for normal sized text (font-size: 16px or 1em)
            and greater than 3 for large text (font-size: 24px or 1.5em).
          </p>
          <p className="text">
            A contrast ratio of less than 3 is considered a fail by WCAG and should therefore NEVER be used.
            Even people with perfect vision will struggle to read text with such low contrast.
          </p>
          <p className="text">
            To summarise, color pairs with the AA rating are not as good as those that pass AAA,
            but can still be used in some cases.
            Do keep in mind though, that people with poor vision or some color blindesses 
            will struggle to read text in the AA range, so if you choose to use these colors
            make sure to use a large font, ideally 24px or greater.
          </p>
        </div>
      </div>
      {Object.keys(theme.colors).map((colorKey, index) =>  
        <ColorRow color={theme.colors[colorKey]} theme={theme} key={index}/>
      )}
    </div>
  );
}

export default ColorSection;
