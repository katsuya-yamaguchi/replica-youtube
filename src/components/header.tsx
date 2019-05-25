import React from 'react';
import styles from '../assets/header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

const Header: React.FC = () => {
  const menuIcon = classNames(styles.common, styles.menu);
  console.log(typeof menuIcon)
  return(
    <div className={styles.header}>
      <div className={styles.title}>
        <FontAwesomeIcon icon={["fab", "youtube"]} className={styles.title_icon} />
        <h1 className={styles.title_name}>YouTube</h1>
      </div>
      <div>
        <FontAwesomeIcon icon="desktop" className={styles.menu_icon} />
        <FontAwesomeIcon icon="video" className={styles.menu_icon} />
        <FontAwesomeIcon icon="search" className={styles.menu_icon} />
      </div>
    </div>
  );
}

export default Header;
