import React, { Component } from "react";

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  Increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  componentDidUpdate(preprops, prestate) {
    console.log(prestate);
    if (prestate.count !== this.state.count) {
      console.log("count value changed");
      alert("count changed");
    }
  }
  render() {
    console.log("Lifecycle  method");
    return (
      <>
        <h2>Lifecycle method</h2>
        <h2>Count:{this.state.count}</h2>
        <button style={{ padding: "10px 20px" }} onClick={this.Increment}>
          Increment
        </button>
      </>
    );
  }
}
export default Lifecycle;
