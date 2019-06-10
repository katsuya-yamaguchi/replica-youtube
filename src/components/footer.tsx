import React from 'react';
import styles from '../assets/footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return(
    <div className={styles.footer}>
      <Link to="/home" className={styles.menu_link}>
        <button type="button" className={styles.menu_item}>
          <FontAwesomeIcon icon="home" className={styles.menu_item_icon} />
          <div className={styles.menu_item_title}>ホーム</div>
        </button>
      </Link>
      <Link to="/trending" className={styles.menu_link}>
        <button className={styles.menu_item}>
          <FontAwesomeIcon icon="fire" className={styles.menu_item_icon} />
          <div className={styles.menu_item_title}>急上昇</div>
        </button>
      </Link>
      <Link to="/subscriptions" className={styles.menu_link}>
        <button className={styles.menu_item}>
          <FontAwesomeIcon icon={["fab", "youtube"]} className={styles.menu_item_icon} />
          <div className={styles.menu_item_title}>登録チャンネル</div>
        </button>
      </Link>
      <Link to="/receive" className={styles.menu_link}>
        <button className={styles.menu_item}>
          <FontAwesomeIcon icon="envelope" className={styles.menu_item_icon} />
          <div className={styles.menu_item_title}>受信トレイ</div>
        </button>
      </Link>
      <Link to="/library" className={styles.menu_link}>
        <button className={styles.menu_item}>
          <FontAwesomeIcon icon="folder" className={styles.menu_item_icon} />
          <div className={styles.menu_item_title}>ライブラリ</div>
        </button>
      </Link>
    </div>
  );
}

export default Footer;
