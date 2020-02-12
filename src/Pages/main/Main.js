import React from "react";
import "../common.scss";
import "./main.scss";
import Nav from "./components/Nav/Nav";
import Feed from "./components/Feed/Feed";
import Rightdiv from "./components/Rightdiv/Rightdiv";

class Main extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="main-wrapper">
          <Feed />
          <Rightdiv />
        </div>
      </>
    );
  }
}

export default Main;
