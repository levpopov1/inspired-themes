import { useState } from 'react';

import data from './data/test-dataset.json';
import NavBar from './components/NavBar';
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

const collections = data.gallery.collections;

function App() {

  const [theme, setTheme] = useState(initialTheme);

  return (
    <div className="App">
      <NavBar collections={collections} setTheme={setTheme}/>
      <Accordion theme={theme} setTheme={setTheme} collections={collections}/>
    </div>
  );
}

export default App;
