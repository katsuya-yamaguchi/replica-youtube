import React from 'react';
import styles from '../assets/home.module.scss';
import Header from './header';
import Footer from './footer';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { style } from '@material-ui/system';

const Home: React.FC = () => {
  const cardStyles = makeStyles(
    createStyles({
      root: {
        marginTop: "30px",
        backgroundColor: "rgba(0, 0, 0, 1)",
      }
    })
  )
  const classes = cardStyles();

  return(
    <div>
      <Header />

        <Card className={classes.root}>
          <CardMedia
            component="img"
            alt="Sample image"
            height="140"
            image="./sample.jpg"
            title="Sample image"
          />
          <CardContent className={styles.detail}>
            <div className={styles.profile_icon}></div>
            <div className={styles.info}>
              <h2 className={styles.item_title}>Sample</h2>
              <div className={styles.item_info}>
                <p className={styles.para}>東海オンエア・183万回視聴・20時間前</p>
              </div>
            </div>
          </CardContent>
        </Card>

      <Footer />
    </div>
  );
}

export default Home;
