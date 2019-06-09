import React from 'react';
import styles from '../assets/footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

const Footer: React.FC = () => {
  return(
    <div className={styles.footer}>
      <div className={styles.menu_item}>
        <FontAwesomeIcon icon="home" className={styles.menu_item_icon} />
        <div className={styles.menu_item_title}>ホーム</div>
      </div>
      <div className={styles.menu_item}>
        <FontAwesomeIcon icon="fire" className={styles.menu_item_icon} />
        <div className={styles.menu_item_title}>急上昇</div>
      </div>
      <div className={styles.menu_item}>
        <FontAwesomeIcon icon={["fab", "youtube"]} className={styles.menu_item_icon} />
        <div className={styles.menu_item_title}>登録チャンネル</div>
      </div>
      <div className={styles.menu_item}>
        <FontAwesomeIcon icon="envelope" className={styles.menu_item_icon} />
        <div className={styles.menu_item_title}>受信トレイ</div>
      </div>
      <div className={styles.menu_item}>
        <FontAwesomeIcon icon="folder" className={styles.menu_item_icon} />
        <div className={styles.menu_item_title}>ライブラリ</div>
      </div>
    </div>
  );
}

export default Footer;
