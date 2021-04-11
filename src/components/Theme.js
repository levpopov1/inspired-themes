import MiniPalette from './MiniPalette';

function Theme({theme}) {
  return (
    <li>
      <button className="dropdown-item d-flex flex-row align-items-center justify-content-between p-3" >
        <span className="text-start pe-3 text-wrap">{theme.name}</span>
        <MiniPalette colors={theme.colors}/>
      </button>
    </li>
  );
}

export default Theme;
