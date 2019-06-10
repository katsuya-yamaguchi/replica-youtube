import React from 'react';
import styles from '../assets/footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Route } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const Home: React.FC = () => {
  return(
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default Home;
