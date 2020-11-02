import React from "react";

export default function Total(props) {
  const { USCurrencyFormat, total } = props;

  return (
    <div className="summary__total">
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value">
        {USCurrencyFormat.format(total)}
      </div>
    </div>
  );
}
