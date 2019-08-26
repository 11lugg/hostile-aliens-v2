import React, { Component } from "react";
import styles from "./Alien.module.scss";

class Alien extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <ul>
          <li>Number of ships: {this.props.ships}</li>
          <li>HP: {this.props.health}</li>
        </ul>
      </div>
    );
  }
}

export default Alien;
