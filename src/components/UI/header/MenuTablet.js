import React from "react";
import styles from "./MenuTablet.module.scss";
import { Link, useLocation } from "react-router-dom";

const MenuTablet = () => {
    const location = useLocation();

  return (
    <div className={styles.menu}>
      <Link to="/">
        <li className={location.pathname === "/" ? styles.clicked : ""}>HOME</li>
      </Link>
      <Link to="/destination">
        <li className={location.pathname === "/destination" ? styles.clicked : ""}>DESTINATION</li>
      </Link>
      <Link to="/crew">
        <li className={location.pathname === "/crew" ? styles.clicked : ""}>CREW</li>
      </Link>
      <Link to="/technology">
        <li className={location.pathname === "/technology" ? styles.clicked : ""}>TECHNOLOGY</li>
      </Link>
    </div>
  );
};

export default MenuTablet;
