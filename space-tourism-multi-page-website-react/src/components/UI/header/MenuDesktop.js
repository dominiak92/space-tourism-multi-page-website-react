import React from "react";
import styles from "./MenuDesktop.module.scss";
import { Link, useLocation } from "react-router-dom";

const MenuDesktop = () => {
    const location = useLocation();

  return (
    <>
      <div className={styles.line}></div>
      <div className={styles.menu}>
        <Link to="/">
          <li className={location.pathname === "/" ? styles.clicked : ""}>
            <span>00</span>HOME
          </li>
        </Link>
        <Link to="/destination">
          <li className={location.pathname === "/destination" ? styles.clicked : ""}>
            <span>01</span>DESTINATION
          </li>
        </Link>
        <Link to="/crew">
          <li className={location.pathname === "/crew" ? styles.clicked : ""}>
            <span>02</span>CREW
          </li>
        </Link>
        <Link to="/technology">
          <li className={location.pathname === "/technology" ? styles.clicked : ""}>
            <span>03</span>TECHNOLOGY
          </li>
        </Link>
      </div>
    </>
  );
};

export default MenuDesktop;
