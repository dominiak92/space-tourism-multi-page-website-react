import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, config, useTransition, animated } from "react-spring";
import hamburgerClose from "./icon-close.svg";
import styles from "./Hamburger.module.scss";

const HamburgerList = (props) => {
  const fadePage = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 50 },
  });

  const handleItemClick = () => {
    props.handleClick(); // wywołaj funkcję handleClick z komponentu nadrzędnego, aby zamknąć menu
  };

  return (
    <animated.div style={fadePage} className={styles.hamburgerMenu}>
      <img
        className={styles.hamburgerClose}
        onClick={props.handleClick}
        src={hamburgerClose}
        alt="logo"
      />
      <ul className={styles.hamburgerMenu__list}>
        <Link to="/" onClick={handleItemClick}>
          <li>
            <span>00</span> HOME
          </li>
        </Link>
        <Link to="/destination" onClick={handleItemClick}>
          <li>
            <span>01</span> DESTINATION
          </li>
        </Link>
        <Link to="/crew" onClick={handleItemClick}>
          <li>
            <span>02</span> CREW
          </li>
        </Link>
        <Link to="/technology" onClick={handleItemClick}>
          <li>
            <span>03</span> TECHNOLOGY
          </li>
        </Link>
      </ul>
    </animated.div>
  );
};

export default HamburgerList;
