import React from "react";
import css from "./Price.module.css";
import PriceCardStandart from "../PriceCards/PriceCardStandart";
import PriceCardVIP from "../PriceCards/PriceCardVIP";

function Price() {
  return (
    <section className={css.priceSection} id="price">
      <div className={css.priceContainer}>
        <h2 className={css.title}>тарифы</h2>
        <div className={css.variantContainer}>
          <button className={css.buttonSPOT}>СПОТ</button>{" "}
          <button className={css.buttonFutures}>фьючерс</button>
        </div>
        <div className={css.cardsContainer}>
          <PriceCardStandart />
          <PriceCardVIP />
        </div>
      </div>
    </section>
  );
}

export default Price;
