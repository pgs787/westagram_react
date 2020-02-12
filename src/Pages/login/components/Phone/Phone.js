import React from "react";
import "./Phone.scss";

class Phone extends React.Component {
  render() {
    return (
      <main className="main-div">
        <div className="dd">
          <img className="mainImage visable" src="./images/1.jpg" alt="img" />
          <img className="mainImage" src="./images/2.jpg" alt="img" />
          <img className="mainImage" src="./images/2.jpg" alt="img" />
          <img className="mainImage" src="./images/3.jpg" alt="img" />
          <img className="mainImage" src="./images/4.jpg" alt="img" />
          <img className="mainImage" src="./images/5.jpg" alt="img" />
        </div>
        <img
          className="login-img"
          id="main-div"
          src="./images/43cc71bb1b43.png"
          alt="main_img"
        />
      </main>
    );
  }
}

export default Phone;
