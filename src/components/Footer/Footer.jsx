import React from "react";
import css from "./Footer.module.css";
import FastNavigation from "../FastNavigation/FastNavigation";

function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.footerContainer}>
        <div className={css.fastNavigationContainer}>
          <FastNavigation />
        </div>
        <div className={css.footerContent}>
          <a href="#header" className={css.footerLogo} />

          <span className={css.copyrite}>
            © 2022 TradeBlade. All rights reserved
          </span>
        </div>
      </div>
      <div className={css.bottomLine}></div>
    </footer>
  );
}

export default Footer;
