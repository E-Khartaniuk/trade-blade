import React from "react";
import css from "./About.module.css";

function About() {
  return (
    <section className={css.about} id="about">
      <div className={css.descriptionContainer}>
        <h2 className={css.title}>О компании</h2>
        <p className={css.description}>
          Мы опытная команда, для которой трейдинг – профессия. TradeBlade
          является авторизованным официальным брокером биржи Binance.
        </p>
        <p className={css.description}>
          Он представляет пользователям множество преимуществ, таких как более
          високая скорость синхронизации API и возможность создать учетную
          запись Binance через платформу TradeBlade всего в 1 клик.
        </p>
      </div>

      <div className={css.formContainer}>
        <form action="submit" className={css.aboutForm}>
          <h3 className={css.aboutFormTitle}>
            Попробуйте сейчас и получите <br />5 дней бесплатного пользования
          </h3>
          <input
            type="text"
            placeholder="Ваш e–mail"
            className={css.heroInput}
          />
          <button type="submit" className={css.heroButton}>
            ПОПРОБОВАТЬ
          </button>
        </form>
      </div>
      <div className={css.mobilePlug}></div>
    </section>
  );
}

export default About;
