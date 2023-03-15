import React from "react";
import Hamburger from "./Hamburger";
import MenuTablet from "./MenuTablet";
import MenuDesktop from "./MenuDesktop";
import Logo from "./Logo";
import styles from "./Header.module.scss";

const Header = (props) => {
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  const isTablet = window.matchMedia(
    "(min-width: 768px) and (max-width: 1439px)"
  ).matches;
  const isDesktop = window.matchMedia("(min-width: 1440px)").matches;

  const savePageComponent = (enteredPage) => {
    props.onComponentHandler(enteredPage)
  }

  return (
    <div className={styles.header}>
      <Logo />
      {isMobile ? (
        <Hamburger onSavePageComponent={savePageComponent} />
      ) : (
        <>
          {isTablet ? <MenuTablet /> : null}
          {isDesktop ? <MenuDesktop /> : null}
        </>
      )}
    </div>
  );
};

export default Header;
