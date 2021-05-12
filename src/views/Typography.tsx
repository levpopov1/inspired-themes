import TypographySection from '../components/TypographySection';

function Typography({theme}) {
  return (
    <div className="router-view-typography">
      <div className="container-fluid">
        <TypographySection theme={theme}/>
      </div>
    </div>
  );
}

export default Typography;
