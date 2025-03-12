import React from "react";
import css from "./FastNavigation.module.css";

function FastNavigation() {
  return (
    <section className={css.fastNavigationSection}>
      <h3 className={css.title}>Быстрая навигация</h3>
      <nav className={css.navigation}>
        <ul className={css.navList}>
          <li className={css.navListItem}>
            <a href="#numbers" className={css.navListLink}>
              Цифры
            </a>
          </li>
          <li lassName={css.navListItem}>
            <a href="#pastTransactions" className={css.navListLink}>
              Сделки онлайн
            </a>
          </li>
          <li lassName={css.navListItem}>
            <a href="#about" className={css.navListLink}>
              о компании
            </a>
          </li>

          <li lassName={css.navListItem}>
            <a href="#price" className={css.navListLink}>
              тарифы
            </a>
          </li>
          <li lassName={css.navListItem}>
            <a href="#questions" className={css.navListLink}>
              FAQ
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default FastNavigation;
