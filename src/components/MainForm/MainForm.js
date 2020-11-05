import React from "react";
import Specs from "../Specs/Specs";

export default function MainForm(props) {
  const { features, featureHash, itemHash, USCurrencyFormat, options } = props;

  //MainForm wraps around features (Specs)
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      <Specs
        features={features}
        featureHash={featureHash}
        itemHash={itemHash}
        option={options}
      />
    </form>
  );
}
