import NavBar from './components/NavBar';
import ColorRow from './components/ColorRow';
import TypographyRow from './components/TypographyRow';
import ButtonyRow from './components/ButtonRow';

const theme = {
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

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="container">
        <ColorRow theme={theme}/>
        <TypographyRow theme={theme}/>
        <ButtonyRow theme={theme}/>
      </div>
    </div>
  );
}

export default App;
