import React, { useState } from "react";
import styles from "./Hamburger.module.scss";
import { Link } from "react-router-dom";
import hamburgerClose from "./icon-close.svg";


const HamburgerList = (props) => {

    return (
        <div
        className={styles.hamburgerMenu}>
        <img
          className={styles.hamburgerClose} onClick={props.handleClick} src={hamburgerClose} alt="logo"/>
        <ul className={styles.hamburgerMenu__list}>
          <Link to="/">
            <li>
              <span>00</span> HOME
            </li>
          </Link>
          <Link to="/destination">
            <li>
              <span>01</span> DESTINATION
            </li>
          </Link>
          <Link to="/crew">
            <li>
              <span>02</span> CREW
            </li>
          </Link>
          <Link to="/technology">
            <li>
              <span>03</span> TECHNOLOGY
            </li>
          </Link>
        </ul>
      </div>
    )
}

export default HamburgerList