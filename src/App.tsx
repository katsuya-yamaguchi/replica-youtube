import React from 'react';
import logo from './logo.svg';
import './App.css';
import { appendFile } from 'fs';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faSearch, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import Header from './components/header';
import styles from './assets/app.module.css';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
}

export default App;
library.add(faSearch, faVideo, faDesktop, faYoutube);
