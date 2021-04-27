import Theme from "./Theme";

function ThemeGallery({collections, setTheme}) {
  
  const handleThemeChange = (id, collectionName) => {
    let currentCollection = collections.find(cl => cl.name === collectionName);
    let nextTheme = currentCollection.themes.find(item => item.id === id);
    setTheme(nextTheme);
  }

  return (
    <div className="row">
      {collections.map(collection =>
        collection.themes.map(theme => 
          <Theme theme={theme} handleThemeChange={handleThemeChange} key={theme.id}/>
        )
      )}
    </div>
  );
}

export default ThemeGallery;
