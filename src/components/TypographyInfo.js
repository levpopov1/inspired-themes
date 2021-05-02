function TypographyInfo({showInfo}) {
  return (
    <div className={`col mb-3 ${showInfo ? "d-block" : "d-none"}`}>
      <div className="card card-outline h-100 p-4">
        <div className="card-body">
          <h2 className="lead fs-3 font-sans-serif">Sans-Serif</h2>
          <p className="text font-sans-serif">
            Sans-serif fonts are the most common, and are the default on most browsers and websites.
            However, depending on your use case, a serif or monospace font might make more sense.
          </p>
          <h2 className="lead fs-3 font-serif">Serif</h2>
          <p className="text font-serif">
            Serif fonts evoke a feeeling of sophistication and professionalism and are often used in applications such as
            news publications, financial or medical institutions and art galleries.
          </p>
          <h2 className="lead fs-3 font-monospace">Monospace</h2>
          <p className="text font-monospace">
            Monospace fonts on the other hand are often used for websites such as programming platforms, 
            crypto/investing sites or as a supporting font for specific sections of a site like code blocks.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TypographyInfo;
