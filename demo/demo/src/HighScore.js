import React, { Component } from "react";
import PropTypes from "react";

class HighScore extends React.Component {
  render() {
    if (this.props.ten) {
      return (
        <div>
          <h3>Beat High Score of 10!</h3>
          <button onClick={(e) => this.props.onReset(e)}>Reset</button>
        </div>
      );
    } else return null;
  }
}

export default HighScore;
