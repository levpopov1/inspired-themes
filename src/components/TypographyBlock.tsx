import React from 'react';
import { useState, useEffect } from 'react';

const TypographyBlock: React.FC = ({color, font, getContrast}) => {

  const [contrastColor, setContrastColor] = useState("dark");

  useEffect(() => {
    setContrastColor(getContrast(color.hex));
  }, [color.hex, getContrast]);

  return (
    <div className={`col mb-3 font-${font}`}>
      <div className={`card h-100 p-4 text-${contrastColor}`} style={{ backgroundColor: color.hex }}>
        <div className="card-body">
          <h1 className="display-5 fw-bold">Example of Bold Title</h1>
          <h2 className="lead fs-3">Example of Thin Subtitle</h2>
        </div>
        <div className="card-body d-flex flex-column justify-content-end">
          <p className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Unde eum delectus rem amet nisi necessitatibus debitis, 
            error reprehenderit dolores sit ducimus ab rerum quod aperiam veritatis? 
            Voluptates corrupti vero id.
          </p>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Asperiores voluptate iusto amet dolore, autem veniam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TypographyBlock;
