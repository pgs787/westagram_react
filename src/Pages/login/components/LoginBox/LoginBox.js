import React from "react";
import { withRouter, Link } from "react-router-dom";
import swal from "sweetalert";

import "./LoginBox.scss";

class LoginBox extends React.Component {
  state = {
    id: "",
    pwd: ""
  };
  handleCheck = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleInputFocus = e => {
    if (e.target.id === "id-span" || e.target.id === "id-ani") {
      this.input.focus();
    } else {
      this.input1.focus();
    }
  };
  handleLoginSuc = async () => {
    if (this.state.id === "park" && this.state.pwd === "1234") {
      await swal("", "로그인에 성공하셨습니다", "success");
      this.props.history.push("/main");
    } else {
      swal(
        "",
        "아이디와 비밀번호가 일치하지 않습니다. 다시 시도 해주세요",
        "error"
      );
    }
  };
  render() {
    return (
      <div className="info">
        <div className="div-info">
          <img src="./images/title.png" alt="title" />
          <div className="info-main-wrapper">
            <div className="info-main">
              <div className="info-main-input" id="id-input">
                {this.state.id ? (
                  <span id="id-ani" onClick={this.handleInputFocus}>
                    전화번호, 사용자 이름 또는 이메일
                  </span>
                ) : (
                  <span
                    id="id-span"
                    name="idSpan"
                    onClick={this.handleInputFocus}
                  >
                    전화번호, 사용자 이름 또는 이메일
                  </span>
                )}

                <input
                  id="id"
                  name="id"
                  type="text"
                  onInput={this.handleCheck}
                  ref={ref => (this.input = ref)}
                />
              </div>

              <div className="info-main-input" id="pwd-input">
                {this.state.pwd ? (
                  <span id="pwd-ani" onClick={this.handleInputFocus}>
                    비밀번호
                  </span>
                ) : (
                  <span id="pwd-span" onClick={this.handleInputFocus}>
                    비밀번호
                  </span>
                )}
                <input
                  id="password"
                  name="pwd"
                  type="password"
                  onInput={this.handleCheck}
                  onKeyPress={e => {
                    if (e.key === "Enter") {
                      this.handleLoginSuc();
                    }
                  }}
                  ref={ref => (this.input1 = ref)}
                />
              </div>
            </div>

            <button
              className="login-btn"
              id="logBtn"
              style={{
                backgroundColor:
                  this.state.id && this.state.pwd ? "#3897f0" : ""
              }}
              onClick={this.handleLoginSuc}
            >
              로그인
            </button>

            <div className="spe-line">
              <div className="line"></div>
              <div
                style={{
                  margin: "0 15px",
                  fontSize: "13px",
                  fontWeight: "600",
                  Color: "rgba(var(--f52,153,153,153)1)"
                }}
              >
                또는
              </div>
              <div className="line"></div>
            </div>
            <div className="login-fb">
              <img src="./images/facebook.svg" alt="img" />
              <div className="fb-font">Facebook으로 로그인</div>
            </div>
            <div className="lose-pwd">비밀번호를 잊으셨나요?</div>
          </div>
        </div>
        <div className="div-sign">
          <div>계정이 없으신가요?&nbsp;</div>
          <div className="sign">가입하기</div>
        </div>
        <div style={{ fontSize: "14px", marginBottom: "20px" }}>
          앱을 다운로드하세요.
        </div>
        <div className="down-icon">
          <img
            src="./images/4a5c9d62d51b.png"
            alt="appstore"
            onClick={() => {
              window.open(
                "https://apps.apple.com/kr/app/instagram/id389801252"
              );
            }}
          />
          <img
            src="./images/f155b664a93b.png"
            alt="googleplay"
            onClick={() => {
              window.open(
                "https://play.google.com/store/apps/details?id=com.instagram.android"
              );
            }}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(LoginBox);
