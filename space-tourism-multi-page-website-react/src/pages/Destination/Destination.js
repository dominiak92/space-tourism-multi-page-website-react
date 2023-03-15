import React, { useState, useEffect } from "react";
import { useSpring, useTransition, animated } from 'react-spring';
import styles from "./Destination.module.scss";
import data from "../../data.json";
import moon from "../Destination/destination-images/moon.jpg"
import titan from "../Destination/destination-images/titan.jpg"
import europa from "../Destination/destination-images/europa.jpg"
import mars from "../Destination/destination-images/mars.jpg"
const Destination = () => {
  const [planet, setPlanet] = useState(data.destinations[0]);
  const [image, setImage] = useState(moon)
  const [clicked, setClicked] = useState(0)

    useEffect(() => {
    document.documentElement.style.setProperty('--planet', `url(${image})`);
  }, [image]);

  const planetPicker = (destination, planet) => {
    setPlanet(data.destinations[destination]);
    setImage(planet)
    setClicked(destination)
  };

  const transitions = useTransition(clicked, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });

  const scale = useTransition(clicked, {
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(-1)' },
  });

  const fadeIn = useTransition(clicked, {
    from: { opacity: 0},
    enter: { opacity: 1},
    leave: { opacity: 0},
  });

  const fadePage = useSpring({
    from: { opacity: 0},
    to: { opacity: 1},
  });

  return (
    <>
    <animated.div style={fadePage} className={styles.destinationBody}></animated.div>
    <animated.div className={styles.destination} style={fadePage}>
      <p className={styles.destination__title}>
        <span>01</span>PICK YOUR DESTINATION
      </p>
      <div className={styles.container}>
      {scale((style, i) =>
            i === clicked &&
            <animated.div style={style} className={styles.planet}></animated.div>
          )}
        <div className={styles.description}>
          <div className={styles.description__menu}>
            <li className={clicked === 0 ? styles.clicked : ''} onClick={() => planetPicker(0, moon)} key={1}>
              MOON
            </li>
            <li className={clicked === 1 ? styles.clicked : ''} onClick={() => planetPicker(1, mars)} key={2}>
              MARS
            </li>
            <li className={clicked === 2 ? styles.clicked : ''} onClick={() => planetPicker(2, europa)} key={3}>
              EUROPA
            </li>
            <li className={clicked === 3 ? styles.clicked : ''} onClick={() => planetPicker(3, titan)} key={4}>
              TITAN
            </li>
          </div>
          {transitions((style, i) =>
            i === clicked &&
            <animated.h2 style={style} className={styles.description__planetName}>{planet.name}</animated.h2>
          )}
          {transitions((style, i) =>
            i === clicked &&
            <animated.p style={style} className={styles.description__planetDescription}>{planet.description}</animated.p>
          )}
          <div className={styles.description__line}></div>
          <div className={styles.description__wrapper}>
          <div className={styles.distance}>
          {fadeIn((style, i) =>
            i === clicked &&
            <animated.p style={style} className={styles.description__smallTitle}>AVG. DISTANCE</animated.p>
          )}
          {fadeIn((style, i) =>
            i === clicked &&
            <animated.p style={style} className={styles.description__information}>{planet.distance}</animated.p>
          )}</div>
          <div className={styles.travel}>
          {fadeIn((style, i) =>
            i === clicked &&
            <animated.p style={style} className={styles.description__smallTitle}>EST. TRAVEL TIME</animated.p>
          )}
          {fadeIn((style, i) =>
            i === clicked &&
            <animated.p style={style} className={styles.description__information}>{planet.travel}</animated.p>
          )}</div></div>
        </div>
      </div>
    </animated.div>
    </>
  );
};

export default Destination;
