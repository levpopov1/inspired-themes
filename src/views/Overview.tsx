import React from 'react';
import ThemeOverview from "../components/ThemeOverview";
import { iTheme } from '../interfaces';

interface Props {
  theme: iTheme
}

const Overview: React.FC<Props> = ({theme}) => {

  let image = {
    background: 'url(' + theme.image + ') center / cover no-repeat'
  }

  return (
    <div className="router-view-overview">
      <div className="container-fluid fullscreen d-flex flex-column justify-content-between pt-3 pt-md-0" style={image}>
        <ThemeOverview theme={theme}/>
      </div>
    </div>
  );
}

export default Overview;
