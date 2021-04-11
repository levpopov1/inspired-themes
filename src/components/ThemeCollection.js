import Theme from './Theme';

function ThemeCollection({collection}) {
  return (
    <div className="dropdown-column col-sm-3 col-xxxl-2">
      <h6 className="dropdown-header">{collection.name}</h6>
      {
        collection.themes.map(theme => 
          <Theme theme={theme} key={theme.id}/>
        )
      }
    </div>
  );
}

export default ThemeCollection;
