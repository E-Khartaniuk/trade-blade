import React from "react";
import css from "./Footer.module.css";
import FastNavigation from "../FastNavigation/FastNavigation";

function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.footerContainer}>
        <div>
          <FastNavigation />
        </div>

        <div className={css.footerLogo}></div>
        <span className={css.copyrite}>
          © 2022 TradeBlade. All rights reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
