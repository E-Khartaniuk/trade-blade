import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.css";
import logo from "../../img/Trade blade logo.png";

import { ReactComponent as HamburgerMenu } from "../../img/burgerMenu.svg";
import { ReactComponent as CloseIcon } from "../../img/closeCross.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={css.header} id="header">
      <div className={css.headerContainer}>
        <nav ref={menuRef} className={css.navigation}>
          <a href="/" className={css.logoLink}>
            <img src={logo} alt="logo" className={css.logo} />
          </a>
          <div className={`${css.navMenu} ${isMenuOpen ? css.open : ""}`}>
            <ul className={css.navList}>
              <li className={css.navListitem}>
                <a
                  className={css.navLink}
                  href="#numbers"
                  onClick={() => setIsMenuOpen(false)}>
                  Цифры
                </a>
              </li>
              <li className={css.navListitem}>
                <a
                  className={css.navLink}
                  href="#pastTransactions"
                  onClick={() => setIsMenuOpen(false)}>
                  Сделки онлайн
                </a>
              </li>
              <li className={css.navListitem}>
                <a
                  className={css.navLink}
                  href="#about"
                  onClick={() => setIsMenuOpen(false)}>
                  О компании
                </a>
              </li>
              <li className={css.navListitem}>
                <a
                  className={css.navLink}
                  href="#price"
                  onClick={() => setIsMenuOpen(false)}>
                  тарифы
                </a>
              </li>

              <li className={css.navListitem}>
                <a
                  className={css.navLink}
                  href="#questions"
                  onClick={() => setIsMenuOpen(false)}>
                  FAQ
                </a>
              </li>
            </ul>

            <div className={css.navButtonContainer}>
              <button className={css.buttonRegistration}>регистрация</button>
              <button className={css.buttonLogin}>Войти</button>
            </div>
          </div>
        </nav>
        <button className={css.burgerButton} onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon /> : <HamburgerMenu />}
        </button>
      </div>
    </header>
  );
}

export default Header;
