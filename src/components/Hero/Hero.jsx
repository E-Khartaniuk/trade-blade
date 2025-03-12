import React from "react";
import css from "./Hero.module.css";

import heroImage from "../../img/heroImg.png";

function Hero() {
  return (
    <section className={css.hero}>
      <div className={css.heroContainer}>
        <img
          src={heroImage}
          alt="statistics"
          className={css.heroImage}
          data-aos="zoom-out"
        />
        <div className={css.heroTitleContainer}>
          <h1 className={css.heroTitle} data-aos="zoom-out">
            моментально Копируй сделки профи трейдеров
          </h1>
          <p className={css.heroDescription}>
            Начни копировать сделки с успешной командой профессиональных
            трейдеров в автоматическом режиме.
          </p>
          <div className={css.formContainer}>
            <form action="submit" className={css.heroForm}>
              <input
                type="text"
                placeholder="Ваш e–mail"
                className={css.heroInput}
              />
              <button type="submit" className={css.heroButton}>
                начать
              </button>
            </form>
          </div>
          <p className={css.heroDescriptionSecond}>
            5 дней бесплатного пользования
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
