import React, { useState, useEffect } from "react";
import styles from "../assets/home.module.scss";
import Footer from "./footer";
import Header from "./header";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import InfiniteScroll from 'react-infinite-scroller';

const Home: React.FC = () => {
  const cardStyles = makeStyles(
    createStyles({
      root: {
        backgroundColor: "rgba(0, 0, 0, 1)",
        marginTop: "30px",
      },
    }),
  );
  const classes = cardStyles();
  
  const [tracks, setTracks] = useState([]);

  const loadVideos = () => {
    fetch('https://replica-youtube-api.herokuapp.com/videos', {mode: 'cors'})
      .then(res => {
        return res.json();
      })
      .then(d => {
        setTracks(d)
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  var items: Array<any> = [];

  tracks.map((track: any) => {
    items.push(
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="Sample image"
          height="140"
          image="./sample.jpg"
          title="Sample image"
        />
        <CardContent className={styles.detail}>
          <div className={styles.profile_icon}/>
          <div className={styles.info}>
            <h2 className={styles.item_title}>{track.title}</h2>
            <div className={styles.item_info}>
              <p className={styles.para}>{track.account + '・' + track.num_of_views + '回視聴' + '・' + '20時間前'}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  })

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
            <div className={styles.profile_icon}/>
            <div className={styles.info}>
              <h2 className={styles.item_title}>Sample</h2>
              <div className={styles.item_info}>
                <p className={styles.para}>東海オンエア・183万回視聴・20時間前</p>
              </div>
            </div>
          </CardContent>
        </Card>


        <InfiniteScroll
          loadMore={loadVideos}
          pageStart={0}
          hasMore={true}
        >
          {items}
        </InfiniteScroll>
      <Footer />
    </div>
  );
};

export default Home;
