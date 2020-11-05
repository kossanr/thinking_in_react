import React from "react";
import Parts from "../Parts/Parts";

export default function Specs(props) {
  const { feature, idx, FEATURES } = props;

  const featureHash = feature + "-" + idx;
  const options = FEATURES[feature].map((item) => (
    <Parts {...props} item={item} />
  ));

  return (
    <fieldset className="feature" key={featureHash}>
      {options}
    </fieldset>
  );
}
