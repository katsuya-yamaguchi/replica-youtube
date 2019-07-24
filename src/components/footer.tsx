import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Link } from "react-router-dom";
import styles from "../assets/footer.module.scss";

const Footer: React.FC = () => {
  return(
    <div className={styles.footer}>
      <Button>
        <Link to="/" className={styles.menu_link}>
          <div className={styles.menu_item}>
            <FontAwesomeIcon icon="home" className={styles.menu_item_icon} />
            <div className={styles.menu_item_title}>ホーム</div>
          </div>
        </Link>
      </Button>
      <Button>
        <Link to="/trending" className={styles.menu_link}>
          <div className={styles.menu_item}>
            <FontAwesomeIcon icon="fire" className={styles.menu_item_icon} />
            <div className={styles.menu_item_title}>急上昇</div>
          </div>
        </Link>
      </Button>
      <Button>
        <Link to="/subscriptions" className={styles.menu_link}>
          <div className={styles.menu_item}>
            <FontAwesomeIcon icon={["fab", "youtube"]} className={styles.menu_item_icon} />
            <div className={styles.menu_item_title}>登録チャンネル</div>
          </div>
        </Link>
      </Button>
      <Button>
        <Link to="/receive" className={styles.menu_link}>
          <div className={styles.menu_item}>
            <FontAwesomeIcon icon="envelope" className={styles.menu_item_icon} />
            <div className={styles.menu_item_title}>受信トレイ</div>
          </div>
        </Link>
      </Button>
      <Button>
        <Link to="/library" className={styles.menu_link}>
          <div className={styles.menu_item}>
            <FontAwesomeIcon icon="folder" className={styles.menu_item_icon} />
            <div className={styles.menu_item_title}>ライブラリ</div>
          </div>
        </Link>
      </Button>
    </div>
  );
};

export default Footer;
