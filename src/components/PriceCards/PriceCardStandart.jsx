import React, { useState } from "react";
import css from "./PriceCardStandart.module.css";
import CheckMark from "../../img/CheckMark";

function PriceCardStandart() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setIsValue] = useState("12 месяцев");
  return (
    <div
      className={css.priceVariantContainer}
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-anchor-placement="top-bottom">
      <h3 className={css.priceTitle}>STANDART</h3>
      <ul className={css.advantagesList}>
        <li className={css.advantagesListItem}>
          <div className={css.advantagesContainer}>
            <div className={css.chekMarkContainer}>
              <CheckMark />
            </div>
            <p className={css.advantages}>Ручной трейдинг</p>
          </div>
          <div className={css.dashedLine}></div>
        </li>
        <li className={css.advantagesListItem}>
          <div className={css.advantagesContainer}>
            <div className={css.chekMarkContainer}>
              <CheckMark />
            </div>
            <p className={css.advantages}>
              Автоматическое или полуавтоматическое копирование сделок
            </p>
          </div>
          <div className={css.dashedLine}></div>
        </li>
        <li className={css.advantagesListItem}>
          <div className={css.advantagesContainer}>
            <div className={css.chekMarkContainer}>
              <CheckMark />
            </div>
            <p className={css.advantages}>Личный кабинет со статистикой</p>
          </div>
          <div className={css.dashedLine}></div>
        </li>
        <li className={css.advantagesListItem}>
          <div className={css.advantagesContainer}>
            <div className={css.chekMarkContainer}>
              <CheckMark />
            </div>
            <p className={css.advantages}>
              Среднесрочные сделки с уровнями набора портфеля
            </p>
          </div>
          <div className={css.dashedLine}></div>
        </li>
      </ul>
      <div className={css.tariffPriceContainer}>
        <p className={css.tariffPrice}>$234</p>
        <div className={css.dropdown}>
          <button
            className={css.toggleButton}
            onClick={() => setIsOpen(!isOpen)}>
            {value} <div className={css.menuArrow}></div>
          </button>
          {isOpen && (
            <ul className={css.menu}>
              <li
                className={css.menuItem}
                onClick={() => {
                  setIsValue("3 месяца");
                  setIsOpen(false);
                }}>
                3 месяца
              </li>
              <li
                className={css.menuItem}
                onClick={() => {
                  setIsValue("6 месяцев");
                  setIsOpen(false);
                }}>
                6 месяцев
              </li>
              <li
                className={css.menuItem}
                onClick={() => {
                  setIsValue("9 месяцев");
                  setIsOpen(false);
                }}>
                9 месяцев
              </li>
              <li
                className={css.menuItem}
                onClick={() => {
                  setIsValue("12 месяцев");
                  setIsOpen(false);
                }}>
                12 месяцев
              </li>
            </ul>
          )}
        </div>
      </div>
      <button className={css.tariffButton}>
        Попробовать
        <span className={css.buttonNote}>5 дней бесплатно</span>
      </button>
    </div>
  );
}

export default PriceCardStandart;
