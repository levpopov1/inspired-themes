function TypographyBlock({color}) {
  return (
    <div className="col mb-3" >
      <div className="card p-5" style={{ backgroundColor: color.hex }}>
      <h1 className="display-4 fw-bold">Example of Bold Title</h1>
      <h2 className="display-6">Example of Thin Title</h2>
      <p className="lead">
        Example of lead text paragraph.
      </p>
      <p className="text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Unde eum delectus rem amet nisi necessitatibus debitis, 
        error reprehenderit dolores sit ducimus ab rerum quod aperiam veritatis? 
        Voluptates corrupti vero id.
      </p>
      <p className="text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Aut doloremque nisi, magni molestias quidem at tempore!
      </p>
    </div>
    </div>
  );
}

export default TypographyBlock;
