import MiniPalette from './MiniPalette';

function Theme({theme}) {
  return (
    <li>
      <a className="dropdown-item d-flex flex-row align-items-center justify-content-between p-3" href="/tokyo-series/pastel">
        <span className="text-start pe-3 text-wrap">{theme.name}</span>
        <MiniPalette colors={theme.colors}/>
      </a>
    </li>
  );
}

export default Theme;
