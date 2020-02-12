import React, { Component } from "react";
import "./Nav.scss";
class Nav extends Component {
  render() {
    return (
      <div className="nav-wrapper">
        <div className="nav-div">
          <div className="nav-left-div">
            <img
              className="hi"
              alt="img"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"
            />
            <img
              alt="img"
              src="http://pgs787.github.io/wecode_study/img/icon.png"
            />
            <img alt="img" src="/images/title.png" />
          </div>
          <input className="nav-search" placeholder="검색" />
          <img
            alt="img"
            className="fir"
            src="/images/classes.svg"
            style={{
              position: "absolute",
              height: "10px",
              opacity: "0.2",
              alignSelf: "center",
              left: "480px"
            }}
          />
          <div className="nav-right-div">
            <img
              alt="img"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            />
            <img
              alt="img"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            />
            <img
              alt="img"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
