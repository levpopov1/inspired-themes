import ColorHeader from './ColorHeader';
import ColorRow from './ColorRow';

function ColorSection({theme}) {
  return (
    <>
      <ColorHeader/>
      {Object.keys(theme.colors).map((colorKey, index) =>  
        <ColorRow color={theme.colors[colorKey]} theme={theme} key={index}/>
      )}
    </>
  );
}

export default ColorSection;
