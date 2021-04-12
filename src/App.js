import { useState } from 'react';

import Hero from './components/Hero';
import ColorRow from './components/ColorRow';
import TypographyHeader from './components/TypographyHeader';
import TypographyRow from './components/TypographyRow';
import ButtonyRow from './components/ButtonRow';
import data from './data/test-dataset.json';
import Sidebar from './components/Sidebar';
import InternalThemeSwither from './components/InternalThemeSwitcher';
import NavBar from './components/NavBar';
import InspoImage from './components/InspoImage';
import Accordion from './components/Accordion';

const initialTheme = {
  id: "1",
  name: "Sakura",
  collection: "Tokyo Series",
  image: "/img/sakura_pastel.jpg",
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

const userPrefs = {
  font: "sans-serif",
  color: "hex"
}

const collections = data.gallery.collections;

function App() {

  const [theme, setTheme] = useState(initialTheme);

  return (
    <div className="App">
      <NavBar collections={collections} setTheme={setTheme}/>
      <Accordion theme={theme}/>
      {/* <Sidebar theme={theme}/> */}
      {/* <NavBar collections={collections}/> */}
      {/* <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <InspoImage theme={theme}/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-10">
            <Accordion/>

          </div>
        </div>
        <ColorRow theme={theme}/>
      </div> */}
      {/* <div className="main">
        <Hero theme={theme}/>
        <div className="container-fluid">
          <ColorRow theme={theme}/>
          <TypographyHeader userPrefs={userPrefs} />
          <TypographyRow theme={theme}/>
          <ButtonyRow theme={theme}/>
        </div>
      </div> */}
    </div>
  );
}

export default App;
