import ThemeGallery from "../components/ThemeGallery";
import Error from "../components/Error";

function Gallery({collections, setTheme}) {
  return (
    <div className="router-view-gallery">
      <div className="container-fluid">
        {collections.length > 0 
          ? <ThemeGallery collections={collections} setTheme={setTheme}/>
          : <Error message={"No content found"} type={"warning"}/>
        }
      </div>
    </div>
  );
}

export default Gallery;
