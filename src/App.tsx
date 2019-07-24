import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faSearch, faDesktop, faHome, faFire, faEnvelope, faFolder } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './containers/home';
import Video from './containers/video';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/trending" component={Video} />
      <Route exact={true} path="/subscriptions" component={Home} />
      <Route exact={true} path="/receive" component={Home} />
      <Route exact={true} path="/library" component={Home} />
    </BrowserRouter>
  );
}

export default App;
library.add(faSearch, faVideo, faDesktop, faYoutube, faHome, faFire, faEnvelope, faFolder);
