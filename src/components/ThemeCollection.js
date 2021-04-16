import Theme from "./Theme";

function ThemeCollection({collection}) {
  
  // const handleThemeChange = () => {
  //   setThemeID(theme.id);
  // }

  return (
    <div className="row">
      <h1 className="title">{collection.name}</h1>
      {collection.themes.map(theme => 
        <Theme theme={theme} key={theme.id}/>
      )}
    </div>
  );
}

export default ThemeCollection;
