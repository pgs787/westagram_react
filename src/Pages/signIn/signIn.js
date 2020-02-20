import React, { Component } from "react";

class signIn extends Component {
  state = { id: "", pwd: "", email: "" };
  handleCheck = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handlesignIn = () => {
    fetch("10.58.5.35:8000/account/sign-in", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.pwd
      })
    });
  };
  render() {
    return (
      <div className="total_wrapper">
        <input
          id="pwd"
          name="pwd"
          type="text"
          onInput={this.handleCheck}
          ref={ref => (this.input = ref)}
        />
        <input
          id="email"
          name="email"
          type="text"
          onInput={this.handleCheck}
          ref={ref => (this.input = ref)}
        />
        <button
          id="logBtn"
          style={{
            backgroundColor: this.state.id && this.state.pwd ? "#3897f0" : ""
          }}
          onClick={this.handlesignIn}
        >
          로그인
        </button>
      </div>
    );
  }
}

export default signIn;
