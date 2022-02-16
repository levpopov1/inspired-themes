import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { iCollection, iTheme, iFetchingError } from './interfaces/index';

// Utils
import makeAPIRequest from './lib/makeAPIRequest';

// Router Views
// import Home from './views/Home';
import Gallery from './views/Gallery';
import Overview from './views/Overview';
import Color from './views/Color';
import Typography from './views/Typography';
import Layout from './views/Layout';

// Components
import Error from './components/Error';
import Navbar2 from './components/Navbar2';
import NavbarMobile from './components/NavbarMobile';
import ExportTheme from './components/ExportTheme';

// Data
// import data from './data/test-dataset.json';


const initialTheme = {
  _id: "1",
  name: "Default",
  collectionName: "Example",
  image: "https://api.themes.levpopov.dev/static/img/default.jpg",
  description: "The is the default theme for the site itself. The colors you see here are used throughout the site's pages and controls. Choose a different theme from the gallery to get started.",
  colors: {
    "primary": {
      "name": "Primary",
      "hex": "#f6e6d9",
      "rgb": "rgb(0,0,239)",
      "hsl": "hsl(240,100%,20%)"
    },
    "secondary": {
      "name": "Secondary",
      "hex": "#252e3d",
      "rgb": "rgb(239,239,0)",
      "hsl": "hsl(240,100%,20%)"
    },
    "highlight": {
      "name": "Highlight",
      "hex": "#f2dcb3",
      "rgb": "rgb(0,120,239)",
      "hsl": "hsl(240,100%,20%)"
    },
    "dark": {
      "name": "Dark",
      "hex": "#23282E",
      "rgb": "rgb(0,0,82)",
      "hsl": "hsl(240,100%,20%)"
    },
    "light": {
      "name": "Light",
      "hex": "#f4f4f4",
      "rgb": "rgb(239,239,255)",
      "hsl": "hsl(240,100%,20%)"
    }
  }
}

// const collections = data.gallery.collections;

const App: React.FC = () => {

  const [theme, setTheme] = useState<iTheme>(initialTheme);
  const [collections, setCollections] = useState<iCollection[]>([]);
  const [fetchingError, setFetchingError] = useState<iFetchingError>({isError: false, message: ""});

  useEffect(() => {
    const getThemeCollections = async () => {

      setFetchingError({isError: false, message: null});

      let response = await makeAPIRequest("/collections");

      if(response.error){
        return setFetchingError({isError: true, message: response.message});
      }

      setCollections(response.data);
    }

    getThemeCollections();

    return () => {
      setCollections([]);
    }
  }, []);


  return (
    <div className="App">
      <Router>
        <Navbar2 theme={theme}/>
        {
          fetchingError.isError
          ? <Error message={fetchingError.message} type={"danger"}/>
          : null
        }
        <Routes>
          <Route path="/" element={<Gallery collections={collections} setTheme={setTheme}/>}></Route>
          <Route path="gallery" element={<Gallery collections={collections} setTheme={setTheme}/>}></Route>
          <Route path="overview" element={<Overview theme={theme}/>}></Route>
          <Route path="color" element={<Color theme={theme}/>}></Route>
          <Route path="typography" element={<Typography theme={theme}/>}></Route>
          <Route path="layout" element={<Layout />}></Route>
        </Routes>
        <NavbarMobile/>
        <ExportTheme theme={theme}/>
      </Router>
    </div>
  );
}

export default App;
