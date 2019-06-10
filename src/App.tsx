import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faSearch, faDesktop, faHome, faFire, faEnvelope, faFolder } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/home';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
      <Route path="/trending" component={Home} />
      <Route path="/subscriptions" component={Home} />
      <Route path="/receive" component={Home} />
      <Route path="/library" component={Home} />
    </BrowserRouter>
  );
}

export default App;
library.add(faSearch, faVideo, faDesktop, faYoutube, faHome, faFire, faEnvelope, faFolder);
