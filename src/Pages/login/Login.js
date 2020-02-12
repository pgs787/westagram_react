import React from "react";
import Phone from "./components/Phone/Phone.js";
import LoginBox from "./components/LoginBox/LoginBox.js";
import Footer from "./components/Footer/Footer.js";

import "./login.scss";
import "../common.scss";

class Login extends React.Component {
  render() {
    return (
      <div className="total_wrapper">
        <div className="div-total-section">
          <Phone />
          <LoginBox />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Login;
