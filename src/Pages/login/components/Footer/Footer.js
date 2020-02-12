import React from "react";
import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <div className="foot_wrapper">
        <div className="foot-wrap">
          <div className="foot-left">
            <span>INSTAGRAM 정보</span>
            <span>도움말</span>
            <span>홍보센터</span>
            <span>API</span>
            <span>채용 정보</span>
            <span>개인정보처리방침</span>
            <span>약관</span>
            <span>디렉터리</span>
            <span>프로필</span>
            <span>해시태그</span>
            <span>언어</span>
          </div>
          <div className="foot-right">© 2020 INSTAGRAM FROM FACEBOOK</div>
        </div>
      </div>
    );
  }
}

export default Footer;
