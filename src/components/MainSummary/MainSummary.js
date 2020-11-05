import React from "react";
import Total from "../Total/Total";
import Option from "../Option/Option";

export default function MainSummary(props) {
  const { selected } = props;

  const summary = Object.keys(selected).map((feature, idx) => (
    <Option {...props} feature={feature} idx={idx} />
  ));

  return (
    <>
      {summary}
      <Total {...props} />
    </>
  );
}
