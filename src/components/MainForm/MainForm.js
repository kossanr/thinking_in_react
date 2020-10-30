import React from "react";

export default class MainForm extends React.Component {
  //   const { features } = props;
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {this.props.features}
      </form>
    );
  }
}
