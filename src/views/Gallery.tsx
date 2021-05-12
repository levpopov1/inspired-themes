import React from 'react';
import ThemeGallery from "../components/ThemeGallery";

function Gallery({collections, setTheme}) {
  return (
    <div className="router-view-gallery">
      <div className="container-fluid mt-3">
        <ThemeGallery collections={collections} setTheme={setTheme}/>
      </div>
    </div>
  );
}

export default Gallery;
