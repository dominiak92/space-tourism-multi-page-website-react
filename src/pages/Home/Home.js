import React from "react";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
const Home = () => {
  const fadeIn = useSpring({
    from: { opacity: 0},
    to: { opacity: 1},
  });

  const fadePage = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });


  return (
    <>
    <animated.div style={fadePage} className={styles.homeBody}></animated.div>
<animated.div style={fadeIn} className={styles.home}>
      <div className={styles.textWrapper}>
        <p className={styles.home__headingFive}>SO, YOU WANT TO TRAVEL TO</p>
        <h2 className={styles.home__headingTwo}>SPACE</h2>
        <p className={styles.home__bodyText}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link to="/destination">
        <button className={styles.home__button}>EXPLORE</button>
      </Link>
    </animated.div>
    </>
  );
};

export default Home;
