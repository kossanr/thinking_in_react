import React from "react";

export default function Parts(props) {
  const { featureHash, options } = props;
  return (
    <fieldset className="feature" key={featureHash}>
      {options}
    </fieldset>
  );
}
