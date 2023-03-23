import React, { useState } from "react";
import hamburgerOpen from "./icon-hamburger.svg";
import hamburgerClose from "./icon-close.svg";
import HamburgerList from "./HamburgerList";
import styles from "./Hamburger.module.scss";
import { Link } from "react-router-dom";

const Hamburger = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prevValue) => !prevValue);
    
  };

  return (
    <>
      <img
        onClick={handleClick}
        className={styles.hamburgerOpen}
        src={hamburgerOpen}
        alt="logo"
      />
      {isClicked ? <HamburgerList handleClick={handleClick} /> : null}
    </>
  );
};

export default Hamburger;
