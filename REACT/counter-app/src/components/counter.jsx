import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
    //imageurl: "https://picsum.photos/200",
  };
  // styles = {
  //   fontSize: 50,
  //   fontWeight: "bold",
  // };
  renderTags() {
    if (this.state.tags.length === 0) return <p>No tags</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  // constructor() {
  //   super();
  //   this.handleIncr=this.handleIncr.bind(this);
  // }

  handleIncr = () => {
    console.log("Clicked here", this);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    //return <div>{this.renderTags()}</div>;
    return (
      <div>
        <span className="{this.badgeClasses()}=>{this.formatcount()}"></span>
        <button onClick={this.handleIncr} className="btb btn-secondary btn-sm">
          Increment
        </button>
      </div>
    );
  }
  badgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  formatcount() {
    const { count } = this.state;
    return count === 0 ? "ZERO" : count;
  }
}

export default Counter;
