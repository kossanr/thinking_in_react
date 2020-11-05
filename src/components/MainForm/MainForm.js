import React from "react";
import Specs from "../Specs/Specs";

export default function MainForm(props) {
  const { FEATURES } = props;

  //features is passed to MainForm
  const features = Object.keys(FEATURES).map((feature, idx) => (
    <Specs {...props} feature={feature} idx={idx} />
  ));

  //MainForm wraps around features (Specs)
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  );
}
