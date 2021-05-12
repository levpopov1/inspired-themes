import React, { SetStateAction } from 'react';
import ThemeGallery from "../components/ThemeGallery";

interface Props {
  collections: Array<Object>,
  setTheme: React.Dispatch<SetStateAction<string>>
}

const Gallery: React.FC<Props> = ({collections, setTheme}) => {
  return (
    <div className="router-view-gallery">
      <div className="container-fluid mt-3">
        <ThemeGallery collections={collections} setTheme={setTheme}/>
      </div>
    </div>
  );
}

export default Gallery;
