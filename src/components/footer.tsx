import React from 'react';
import styles from '../assets/footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: grey[800],
    },
  },
});

const Footer: React.FC = () => {
  const classes = useStyles();
  return(
    <div className={styles.footer}>
      <Button className={classes.root}> 
        <Link to="/home" className={styles.menu_link}>
          <div className={styles.menu_item}>
            <FontAwesomeIcon icon="home" className={styles.menu_item_icon} />
            <div className={styles.menu_item_title}>ホーム</div>
          </div>
        </Link>
      </Button>
      <Button className={classes.root}> 
        <Link to="/trending" className={styles.menu_link}>
          <div className={styles.menu_item}>
            <FontAwesomeIcon icon="fire" className={styles.menu_item_icon} />
            <div className={styles.menu_item_title}>急上昇</div>
          </div>
        </Link>
      </Button>
      <Button className={classes.root}> 
        <Link to="/subscriptions" className={styles.menu_link}>
          <div className={styles.menu_item}>
            <FontAwesomeIcon icon={["fab", "youtube"]} className={styles.menu_item_icon} />
            <div className={styles.menu_item_title}>登録チャンネル</div>
          </div>
        </Link>
      </Button>
      <Button className={classes.root}> 
        <Link to="/receive" className={styles.menu_link}>
          <div className={styles.menu_item}>
            <FontAwesomeIcon icon="envelope" className={styles.menu_item_icon} />
            <div className={styles.menu_item_title}>受信トレイ</div>
          </div>
        </Link>
      </Button>
      <Button className={classes.root}> 
        <Link to="/library" className={styles.menu_link}>
          <div className={styles.menu_item}>
            <FontAwesomeIcon icon="folder" className={styles.menu_item_icon} />
            <div className={styles.menu_item_title}>ライブラリ</div>
          </div>
        </Link>
      </Button>
    </div>
  );
}

export default Footer;
