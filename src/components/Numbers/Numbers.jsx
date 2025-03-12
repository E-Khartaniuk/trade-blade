import React from "react";
import css from "./Numbers.module.css";

function Numbers() {
  return (
    <section className={css.numbers} id="numbers">
      <div className={css.titlecontainer}>
        <h2 className={css.numbersTitle}>ЦИФРЫ</h2>
        <p className={css.subtitle}>Cентябрь 2022</p>
      </div>

      <ul className={css.metricList}>
        <li
          className={css.metricItem}
          data-aos="flip-up"
          data-aos-anchor-placement="top-bottom">
          <p className={css.metricName}>Торговой прибыли</p>
          <p className={css.metricValue}>2756%</p>
        </li>
        <li
          className={css.metricItem}
          data-aos="flip-up"
          data-aos-delay="200"
          data-aos-anchor-placement="top-bottom">
          <p className={css.metricName}>фьючерсных и спотовых сделок</p>
          <p className={css.metricValue}>67</p>
        </li>
        <li
          className={css.metricItem}
          data-aos="flip-up"
          data-aos-delay="300"
          data-aos-anchor-placement="top-bottom">
          <p className={css.metricName}>прибыль подписчиков</p>
          <p className={css.metricValue}>375000</p>
        </li>
      </ul>
      <div className={css.mobilePlug}></div>
    </section>
  );
}

export default Numbers;
