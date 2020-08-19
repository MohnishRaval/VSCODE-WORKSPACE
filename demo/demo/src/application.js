import React, { Component } from "react";
import HighScore from "./HighScore";
//import PropTypes from "react";

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      ten: false,
    };
    //this.handleClick = this.handleClick.bind(this);
    this.resetcount = this.resetcount.bind(this);
  }

  handleClick = () => {
    //console.log("clicked");
    this.setState({ count: this.state.count + 1 });
  };

  resetcount = (e) => {
    this.setState({ count: 0, ten: false });
  };

  componentDidUpdate(props, state) {
    if (
      this.state.count > 10 &&
      this.state.count != state.count &&
      !this.state.ten
    ) {
      this.setState({ ten: true });
    }
  }

  render() {
    let { count } = this.state;

    return (
      <div>
        <h1>Clicked {count} times!</h1>
        {/* {this.state.ten ? <h3>Beat High score 10!</h3> : null} */}
        <HighScore
          ten={this.state.ten}
          resetcount={(e) => this.resetcount(e)}
        />

        <span>
          <button onClick={(e) => this.handleClick()}>click here</button>
        </span>
      </div>
    );
  }
}

export default Application;
