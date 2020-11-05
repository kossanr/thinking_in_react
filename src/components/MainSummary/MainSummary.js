import React from "react";
// import Total from "../Total/Total";
// import Option from "../Option/Option";

export default function MainSummary(props) {
  const { USCurrencyFormat, selected, total, featureHash, options } = props;

  const summary = Object.keys(selected).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const selectedOption = selected[feature];

    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(selectedOption.cost)}
          {/* <Total USCurrencyFormat={USCurrencyFormat} total={total} /> */}
        </div>
      </div>
    );
  });

  return summary;
}
