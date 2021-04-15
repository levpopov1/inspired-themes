import MiniPalette from './MiniPalette';

function Theme({theme, setThemeID}) {
  
  const handleThemeChange = () => {
    setThemeID(theme.id);
  }

  return (
    <li>
      <button className="dropdown-item d-flex flex-row align-items-center justify-content-between p-3" onClick={handleThemeChange}>
        <span className="text-start pe-3 text-wrap">{theme.name}</span>
        <MiniPalette colors={theme.colors}/>
      </button>
    </li>
  );
}

export default Theme;
