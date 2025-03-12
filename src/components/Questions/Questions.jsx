import React, { useState } from "react";
import css from "./Questions.module.css";
import ArrowIcon from "../../img/menuArrow";

function Questions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={css.questionsSection} id="questions">
      <h2 className={css.title}>Часто задаваемые вопросы</h2>

      <ul className={css.questionsList}>
        <li
          className={`${css.questionsItem} ${
            openIndex === 0 ? css.markSelected : ""
          }`}>
          <button className={css.question} onClick={() => toggleFAQ(0)}>
            Что такое TradeBlade
            <span className={openIndex === 0 ? css.arrowUp : css.arrowDown}>
              <ArrowIcon color={openIndex === 0 ? "#FFF" : "#030718"} />
            </span>
          </button>
          <div className={`${css.answer} ${openIndex === 0 ? css.open : ""}`}>
            <p className={css.answerParagraph}>
              Мы опытная команда, для которой трейдинг – профессия. TradeBlade
              является авторизованным официальным брокером биржи Binance.
            </p>
            <p>
              Он представляет пользователям множество преимуществ, таких как
              более высокая скорость синхронизации API и возможность создать
              учетную запись Binance через платформу TradeBlade всего в 1 клик.
            </p>
          </div>
        </li>

        <li
          className={`${css.questionsItem} ${
            openIndex === 1 ? css.markSelected : ""
          }`}>
          <button className={css.question} onClick={() => toggleFAQ(1)}>
            Что TradeBlade предлагает инвесторам
            <span className={openIndex === 1 ? css.arrowUp : css.arrowDown}>
              <ArrowIcon color={openIndex === 1 ? "#FFF" : "#030718"} />{" "}
            </span>
          </button>
          <div className={`${css.answer} ${openIndex === 1 ? css.open : ""}`}>
            Мы опытная команда, для которой трейдинг – профессия.
          </div>
        </li>

        <li
          className={`${css.questionsItem} ${
            openIndex === 2 ? css.markSelected : ""
          }`}>
          <button className={css.question} onClick={() => toggleFAQ(2)}>
            Должен ли я перевести свои средства на TradeBlade
            <span className={openIndex === 2 ? css.arrowUp : css.arrowDown}>
              <ArrowIcon color={openIndex === 2 ? "#FFF" : "#030718"} />{" "}
            </span>
          </button>
          <div className={`${css.answer} ${openIndex === 2 ? css.open : ""}`}>
            TradeBlade является авторизованным официальным брокером биржи
            Binance. Он представляет пользователям множество преимуществ, таких
            как более высокая скорость синхронизации API и возможность создать
            учетную запись Binance через платформу TradeBlade всего в 1 клик.
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Questions;
