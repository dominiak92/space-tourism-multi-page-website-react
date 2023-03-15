import React, { useState } from "react";
import { useSpring, useTransition, animated } from "react-spring";
import styles from "./Technology.module.scss";
import launchLandscape from "./technology-images/image-launch-vehicle-landscape.jpg";
import launchPortrait from "./technology-images/image-launch-vehicle-portrait.jpg";
import capsuleLandscape from "./technology-images/image-space-capsule-landscape.jpg";
import capsulePortrait from "./technology-images/image-space-capsule-portrait.jpg";
import spaceportLandscape from "./technology-images/image-spaceport-landscape.jpg";
import spaceportPortrait from "./technology-images/image-spaceport-portrait.jpg";
import data from "../../data.json";
const Technology = () => {
  const isDesktop = window.matchMedia("(min-width: 1200px)").matches;

  const [image, setImage] = useState(
    isDesktop ? launchPortrait : launchLandscape
  );
  const [clicked, setClicked] = useState(0);
  const [jsonNumber, setJsonNumber] = useState(0);

  const transitions = useTransition(clicked, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  const fadeIn = useTransition(clicked, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const fadePage = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const images = [
    {
      id: 0,
      landscape: launchLandscape,
      portrait: launchPortrait,
    },
    {
      id: 1,
      landscape: spaceportLandscape,
      portrait: spaceportPortrait,
    },
    {
      id: 2,
      landscape: capsuleLandscape,
      portrait: capsulePortrait,
    },
  ];

  const descriptionSetter = (image, number) => {
    setImage(image);
    setJsonNumber(number);
    setClicked(number);
  };

  return (
    <>
      <animated.div style={fadePage} className={styles.technologyBody}></animated.div>
      <animated.div style={fadePage}>
        <p className={styles.title}>
          <span>03</span>SPACE LAUNCH 101
        </p>
        <div className={styles.technology}>
          {fadeIn(
            (style, i) =>
              i === clicked && (
                <animated.img
                  style={style}
                  className={styles.img}
                  src={image}
                  alt="spaceship"
                />
              )
          )}
          <div className={styles.buttonDescription}>
            <div className={styles.buttons}>
              {images.map((image) => (
                <button
                  className={
                    clicked === image.id ? styles.clicked : styles.button
                  }
                  key={image.id}
                  onClick={() =>
                    descriptionSetter(
                      isDesktop ? image.portrait : image.landscape,
                      image.id
                    )
                  }
                >
                  {image.id + 1}
                </button>
              ))}
            </div>
            {transitions(
              (style, i) =>
                i === clicked && (
                  <animated.div style={style} className={styles.information}>
                    {" "}
                    <p className={styles.terminology}>THE TERMINOLOGY...</p>
                    <h2 className={styles.descriptionTitle}>
                      {data.technology[jsonNumber].name}
                    </h2>
                    <p className={styles.description}>
                      {data.technology[jsonNumber].description}
                    </p>
                  </animated.div>
                )
            )}
          </div>
        </div>
      </animated.div>
    </>
  );
};

export default Technology;
