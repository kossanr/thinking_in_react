import React, { Component } from "react";

import MainSummary from "./components/MainSummary/MainSummary";
import MainForm from "./components/MainForm/MainForm";

import FEATURES from "./FEATURES";
import "./App.css";

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: "17th Generation Intel Core HB (7 Core with donut spare)",
        cost: 700,
      },
      "Operating System": {
        name: "Ubuntu Linux 16.04",
        cost: 200,
      },
      "Video Card": {
        name: "Toyota Corolla 1.5v",
        cost: 1150.98,
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500,
      },
    },
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected,
    });
  };

  render() {
    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <MainForm
            USCurrencyFormat={USCurrencyFormat}
            {...this.state}
            FEATURES={FEATURES}
            updateFeature={this.updateFeature}
          />
          <section className="main__summary">
            <h2>Your cart</h2>
            <MainSummary
              USCurrencyFormat={USCurrencyFormat}
              total={total}
              {...this.state}
            />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
