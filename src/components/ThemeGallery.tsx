import React, { SetStateAction } from 'react';
import { useNavigate } from "react-router-dom";
import { iCollection, iTheme } from '../interfaces';
import Theme from "./Theme";

interface Props {
  collections: Array<iCollection>,
  setTheme: React.Dispatch<SetStateAction<iTheme>>
}

const ThemeGallery: React.FC<Props> = ({collections, setTheme}) => {

  let navigate = useNavigate();
  
  const handleThemeChange = (id: string, collectionName: string) => {
    let currentCollection = collections.find(cl => cl.name === collectionName);
    if(currentCollection){
      let nextTheme = currentCollection.themes.find(item => item._id === id);
      setTheme(nextTheme!);
    }
    navigate("/overview");
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
