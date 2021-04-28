import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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

// Data
// import data from './data/test-dataset.json';


const initialTheme = {
  id: "1",
  name: "Sakura",
  collection: "Tokyo Series",
  image: "https://api.themes.levpopov.dev/static/img/sakura_pastel.jpg",
  colors: {
    "primary": {
      "name": "Primary",
      "hex": "#e1caaa",
      "rgb": "rgb(0,0,239)",
      "hsl": "hsl(240,100%,20%)"
    },
    "secondary": {
      "name": "Secondary",
      "hex": "#41373b",
      "rgb": "rgb(239,239,0)",
      "hsl": "hsl(240,100%,20%)"
    },
    "highlight": {
      "name": "Highlight",
      "hex": "#8cc125",
      "rgb": "rgb(0,120,239)",
      "hsl": "hsl(240,100%,20%)"
    },
    "dark": {
      "name": "Dark",
      "hex": "#211f20",
      "rgb": "rgb(0,0,82)",
      "hsl": "hsl(240,100%,20%)"
    },
    "light": {
      "name": "Light",
      "hex": "#ededed",
      "rgb": "rgb(239,239,255)",
      "hsl": "hsl(240,100%,20%)"
    }
  }
}

// const collections = data.gallery.collections;

function App() {

  const [theme, setTheme] = useState(initialTheme);
  const [collections, setCollections] = useState([]);
  const [fetchingError, setFetchingError] = useState({isError: false, message: ""});

  useEffect(() => {
    const getThemeCollections = async () => {

      setFetchingError({isError: false});

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
        <Navbar2/>
        {
          fetchingError.isError
          ? <Error message={fetchingError.message} type={"danger"}/>
          : null
        }
        <Switch>
          <Route path="/gallery">
            <Gallery collections={collections} setTheme={setTheme}/>
          </Route>
          <Route path="/overview">
            <Overview theme={theme}/>
          </Route>
          <Route path="/color">
            <Color theme={theme}/>
          </Route>
          <Route path="/typography">
            <Typography theme={theme}/>
          </Route>
          <Route path="/layout">
            <Layout />
          </Route>
          <Route path="/">
            <Gallery collections={collections} setTheme={setTheme}/>
          </Route>
        </Switch>
        <NavbarMobile/>
      </Router>
    </div>
  );
}

export default App;
