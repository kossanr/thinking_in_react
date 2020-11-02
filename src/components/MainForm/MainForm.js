import React from "react";

export default class MainForm extends React.Component {
  render() {
    //MainForm wraps around features (Specs)
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {this.props.features}
      </form>
    );
  }
}
