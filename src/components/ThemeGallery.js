import { useHistory } from "react-router-dom";
import Theme from "./Theme";

function ThemeGallery({collections, setTheme}) {

  let history = useHistory();
  
  const handleThemeChange = (id, collectionName) => {
    let currentCollection = collections.find(cl => cl.name === collectionName);
    let nextTheme = currentCollection.themes.find(item => item._id === id);
    setTheme(nextTheme);
    history.push("/overview");
  }

  return (
    <div className="row">
      {collections.map(collection =>
        collection.themes.map(theme => 
          <Theme theme={theme} handleThemeChange={handleThemeChange} key={theme._id}/>
        )
      )}
    </div>
  );
}

export default ThemeGallery;
