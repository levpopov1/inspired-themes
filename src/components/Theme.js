import MiniPalette from './MiniPalette';

function Theme({theme}) {
  return (
    <li>
      <a className="dropdown-item d-flex flex-row align-items-center p-3" href="/tokyo-series/pastel">
        <MiniPalette colors={theme.colors}/>
        <span className="text-start ps-3 text-wrap">{theme.name}</span>
      </a>
    </li>
  );
}

export default Theme;
