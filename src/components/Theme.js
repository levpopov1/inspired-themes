import LikeButton from './LikeButton';
import MiniPalette from './MiniPalette';

function Theme({theme}) {
  
  // const handleThemeChange = () => {
  //   setThemeID(theme.id);
  // }

  return (
    <div className="col-sm-4 col-uhd-2">
      <div className="card gallery-card mb-4">
        <img src={theme.image} className="card-img-top" alt={"Image of " + theme.name}/>
        <div className="card-body">
          <h6 className="card-title text-muted d-block">
            {theme.collection}
          </h6>
          <div className="d-flex flex-row justify-content-between align-items-center">
            <h4 className="card-title text-wrap">
              {theme.name}
            </h4>
            <div className="reactions">
              <LikeButton/>
            </div>
          </div>
        </div>
        <div className="card-body">
          <MiniPalette colors={theme.colors}/>
        </div>
        <div className="card-body">
          <p className="text mb-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptatibus eos nisi beatae repellendus quibusdam consequuntur commodi sint a et voluptatem!
          </p>
        </div>
        <div className="card-body d-grid ">
          <button type="button" className="btn btn-primary">Set Theme</button>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <small className="text-muted">
            <span className="me-1">By</span>
            <a href="/" className="link">Uploader Name</a>
          </small>
          <small className="text-muted">
            01/02/2021
          </small>
        </div>
      </div>
    </div>
  );
}

export default Theme;
