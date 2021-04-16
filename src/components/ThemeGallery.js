import ThemeCollection from "./ThemeCollection";
import Theme from "./Theme";

function ThemeGallery({collections, setTheme}) {

  const openOverviweSection = () => {
    let currentSection = document.querySelector('#vac #s00');
    let overviewSection = document.querySelector('#vac #s0');
    currentSection.parentNode.classList.remove("open");
    currentSection.classList.remove("show");
    overviewSection.parentNode.classList.add("open");
    overviewSection.classList.add("show");
  }
  
  const handleThemeChange = (id, collectionName) => {
    let currentCollection = collections.find(cl => cl.name === collectionName);
    let nextTheme = currentCollection.themes.find(item => item.id === id);
    setTheme(nextTheme);
    openOverviweSection();
  }

  return (
    <div className="section-container py-3">
      <div className="row">
        {collections.map(collection =>
          // <ThemeCollection collection={collection} key={collection.id}/>
          collection.themes.map(theme => 
            <Theme theme={theme} setTheme={handleThemeChange} key={theme.id}/>
          )
        )}
      </div>
    </div>
  );
}

export default ThemeGallery;
