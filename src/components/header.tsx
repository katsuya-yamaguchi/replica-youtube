import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";
import styles from "../assets/header.module.scss";

const Header: React.FC = () => {
  const menuIcon = classNames(styles.common, styles.menu);
  return(
    <div className={styles.header}>
      <div className={styles.title}>
        <FontAwesomeIcon icon={["fab", "youtube"]} className={styles.title_icon} />
        <h1 className={styles.title_name}>YouTube</h1>
      </div>
      <div className={styles.menu}>
        <FontAwesomeIcon icon="desktop" className={styles.menu_icon} />
        <FontAwesomeIcon icon="video" className={styles.menu_icon} />
        <FontAwesomeIcon icon="search" className={styles.menu_icon} />
        <div className={styles.profile_img}/>
      </div>
    </div>
  );
};

export default Header;
