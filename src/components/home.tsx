import React from "react";
import styles from "../assets/home.module.scss";
import Footer from "./footer";
import Header from "./header";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import InfiniteScroll from "react-infinite-scroller";

interface AddItemProps {
  flag: boolean;
  tracks: object[];
  addItems: (item: object) => void;
  hasMore: (flag: boolean) => void;
};

const Home: React.FC<AddItemProps> = ({ flag, tracks, addItems, hasMore }) => {
  const cardStyles = makeStyles(
    createStyles({
      root: {
        backgroundColor: "rgba(0, 0, 0, 1)",
        marginTop: "30px",
      },
    }),
  );
  const classes = cardStyles();

  const loadVideos = () => {
    fetch("https://replica-youtube-api.herokuapp.com/videos", {mode: "cors"})
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        Object.keys(json).forEach( (key) => {
          addItems(json[key]);
        });
        if (json) {
          hasMore(false);
        }
      })
      .catch((error) => {
        // tslint:disable-next-line: no-console
        console.log(error.message);
      });
  };

  return(
    <div>
      <Header />

        <InfiniteScroll
          initialLoad={false}
          loadMore={loadVideos}
          pageStart={0}
          hasMore={flag}
          className={styles.items}
        >
          {
            // tslint:disable-next-line: jsx-no-multiline-js
            tracks.map((track: any, key: number) => {
              return(
                <Card className={classes.root} key={key}>
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
                        <p className={styles.para}>
                          {track.account + "・" + track.num_of_views + "回視聴" + "・" + "20時間前"}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          }
        </InfiniteScroll>

      <Footer />
    </div>
  );
};

export default Home;
