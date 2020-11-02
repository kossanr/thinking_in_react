import React from "react";
import Parts from "../Parts/Parts";

export default function Specs(props) {
  const { features, featureHash } = props;
  return (
    <fieldset className="feature" key={featureHash}>
      <legend className="feature_name">
        <h3>{features} </h3>
        <Parts />
      </legend>
    </fieldset>
  );
}
