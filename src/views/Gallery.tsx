import React, { SetStateAction } from 'react';
import ThemeGallery from "../components/ThemeGallery";
import { iCollection, iTheme } from '../interfaces';

interface Props {
  collections: Array<iCollection>,
  setTheme: React.Dispatch<SetStateAction<iTheme>>
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
