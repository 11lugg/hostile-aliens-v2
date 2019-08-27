import React, { Component } from "react";
import "./App.css";
import Alien from "./components/Alien/Alien";

class App extends Component {
  state = {
    motherShips: 1,
    defenceShips: 5,
    attackShips: 8,
    motherValue: 100,
    defenceValue: 80,
    attackValue: 45
  };

  getRandom = () => {
    return Math.floor(Math.random() * 12);
  };

  randomAttack = () => {
    if (this.getRandom() === 0) {
      this.setState({ motherValue: this.state.motherValue - 9 });
    }
    if (this.getRandom() >= 1 && this.getRandom() <= 6) {
      this.setState({ defenceValue: this.state.defenceValue - 10 });
    }
    if (this.getRandom() >= 7 && this.getRandom() <= 12) {
      this.setState({ attackValue: this.state.attackValue - 12 });
    }
  };

  handleClick = () => {
    this.randomAttack();
    this.motherZero();
    this.defenceZero();
    this.attackZero();
  };

  motherZero = () => {
    if (this.state.motherValue <= 1) {
      this.setState({
        motherShips: "Dead",
        motherValue: "Dead",
        defenceShips: "Dead",
        defenceValue: "Dead",
        attackShips: "Dead",
        attackValue: "Dead"
      });
      alert("Player 1 wins!");
    }
  };

  defenceZero = () => {
    if (this.state.defenceValue <= 10) {
      this.setState({
        defenceShips: this.state.defenceShips - 1,
        defenceValue: 100
      });
    }
    if (this.state.defenceShips === 1 && this.state.defenceValue <= 10) {
      this.setState({
        defenceShips: "Dead",
        defenceValue: "Dead"
      });
    }
    if (
      this.state.defenceShips === "Dead" &&
      this.state.defenceShips === "Dead"
    ) {
      this.setState({
        defenceShips: "Dead",
        defenceValue: "Dead"
      });
    }
  };

  attackZero = () => {
    if (this.state.attackValue <= 9) {
      this.setState({
        attackShips: this.state.attackShips - 1,
        attackValue: 80
      });
    }
    if (this.state.attackShips === 1 && this.state.attackValue <= 9) {
      this.setState({
        attackShips: "Dead",
        attackValue: "Dead"
      });
    }
    if (
      this.state.attackShips === "Dead" &&
      this.state.attackShips === "Dead"
    ) {
      this.setState({
        attackShips: "Dead",
        attackValue: "Dead"
      });
    }
  };

  handleReset = () => {
    this.setState({
      motherValue: 100,
      defenceValue: 80,
      attackValue: 45,
      motherShips: 1,
      defenceShips: 5,
      attackShips: 8
    });
  };

  render() {
    const hitBtn = <button onClick={this.handleClick}>Hit</button>;
    const resetBtn = <button onClick={this.handleReset}>Reset</button>;
    const button = this.state.motherValue <= "Dead" ? resetBtn : hitBtn;
    return (
      <div className="App">
        <Alien
          name="Mothership"
          ships={this.state.motherShips}
          health={this.state.motherValue}
        />
        <Alien
          name="Defense"
          ships={this.state.defenceShips}
          health={this.state.defenceValue}
        />
        <Alien
          name="Attack"
          ships={this.state.attackShips}
          health={this.state.attackValue}
        />
        {button}
      </div>
    );
  }
}

export default App;
