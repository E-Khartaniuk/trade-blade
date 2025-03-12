import React from "react";
import css from "./PastTransactions.module.css";

import data from "../../data/data.json";

function PastTransactions() {
  return (
    <section className={css.pastTransactions} id="pastTransactions">
      <div className={css.pastTransactionsContainer}>
        <h2 className={css.transactionsTitle}>Прошедшие сделки</h2>
        <p className={css.status}>Онлайн</p>

        <ul className={css.transactionsList}>
          {data.map((item) => (
            <li className={css.transactionsItem}>
              <div className={css.itemBackgroundLogo}></div>
              <h3 className={css.currencyPair}>{item.pair}</h3>
              <p className={css.currencyPairTime}>SPOT · 1 мин. назад</p>
              <p className={css.profit}>ПРИБЫЛЬ</p>
              <p className={css.value}>{item.proffit}</p>
              <div className={css.purposeContainer}>
                <p className={css.purpose}>Цель 4 </p>
                <p className={css.releaseDate}>Дата входа 06.10.2022</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PastTransactions;
