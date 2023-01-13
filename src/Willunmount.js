import React, { Component } from "react";

class Willunmount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delete: false,
    };
  }

  deleteusers = () => {
    this.setState({ delete: true });
  };
  render() {
    return (
      <>
        <div>
          <button onClick={this.deleteusers}> Delete user</button>

          {this.state.delete ? null : <User />}
        </div>
      </>
    );
  }
}

class User extends React.Component {
  componentWillUnmount() {
    alert("deleted sucessfully");
  }
  render() {
    return (
      <div>
        <h2>Username Rahul</h2>
        <h2>rahul123a@gmail.com</h2>
      </div>
    );
  }
}
export default Willunmount;
