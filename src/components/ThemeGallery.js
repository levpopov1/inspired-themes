import ThemeCollection from "./ThemeCollection";
import Theme from "./Theme";

function ThemeGallery({collections}) {
  
  // const handleThemeChange = () => {
  //   setThemeID(theme.id);
  // }

  return (
    <div className="section-container py-3">
      <div className="row">
        {collections.map(collection =>
          // <ThemeCollection collection={collection} key={collection.id}/>
          collection.themes.map(theme => 
            <Theme theme={theme} key={theme.id}/>
          )
        )}
      </div>
    </div>
  );
}

export default ThemeGallery;
