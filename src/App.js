// import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ColorRow from './components/ColorRow';
import TypographyHeader from './components/TypographyHeader';
import TypographyRow from './components/TypographyRow';
import ButtonyRow from './components/ButtonRow';
// import data from './data/test-dataset.json';
import Sidebar from './components/Sidebar';

const theme = {
  id: "1",
  name: "Sakura",
  collection: "Tokyo Series",
  image: "/img/sakura_pastel.jpg",
  colors: {
    primary: {
      name: "Primary",
      hex: "#0000ef",
      rgb: "rgb(0,0,239)",
      hsl: "hsl(240,100%,20%)"
    },
    secondary: {
      name: "Secondary",
      hex: "#efef00",
      rgb: "rgb(239,239,0)",
      hsl: "hsl(240,100%,20%)"
    },
    highlight: {
      name: "Highlight",
      hex: "#0078ef",
      rgb: "rgb(0,120,239)",
      hsl: "hsl(240,100%,20%)"
    },
    shadow: {
      name: "Shadow",
      hex: "#000052",
      rgb: "rgb(0,0,82)",
      hsl: "hsl(240,100%,20%)"
    },
    light: {
      name: "Light",
      hex: "#efefff",
      rgb: "rgb(239,239,255)",
      hsl: "hsl(240,100%,20%)"
    },
  }
}

const userPrefs = {
  font: "sans-serif",
  color: "hex"
}

// const collections = data.gallery.collections;

function App() {
  return (
    <div className="App">
      <Sidebar theme={theme}/>
      <div className="main">
        <Hero theme={theme}/>
        <div className="container-fluid">
          <ColorRow theme={theme}/>
          <TypographyHeader userPrefs={userPrefs} />
          <TypographyRow theme={theme}/>
          <ButtonyRow theme={theme}/>
        </div>
      </div>
      {/* <NavBar collections={collections}/> */}
      {/* <div className="container">
        <Hero theme={theme}/>
        <ColorRow theme={theme}/>
        <TypographyRow theme={theme}/>
        <ButtonyRow theme={theme}/>
      </div> */}
    </div>
  );
}

export default App;
