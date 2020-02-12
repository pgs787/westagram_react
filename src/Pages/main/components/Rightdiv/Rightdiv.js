import React, { Component } from "react";
import "./Rightdiv.scss";
class Rightdiv extends Component {
  render() {
    return (
      <div className="right-div-wrapper">
        <div className="right-div">
          <div className="right-div-top">
            <img
              alt="img"
              src="http://pgs787.github.io/wecode_study/img/my.jpg"
            />
            <div style={{ marginLeft: " 15px " }}>
              gisung
              <br />
              <div style={{ color: " gray", fontWeight: "normal" }}>빡기</div>
            </div>
          </div>
          <div className="box-div">
            <div className="box-top">
              <div className="box-top-left">스토리</div>
              <div className="box-top-right">모두 보기</div>
            </div>
            <div
              style={{
                height: "200px",
                overflowY: "scroll",
                display: "block "
              }}
            >
              <div>
                <div className="box-content-list">
                  <div className="left-img-div">
                    <img alt="img" src="/images/circle.png" />
                    <img
                      alt="img"
                      src="/images/b4ccdd4e512071f3977f6cc956a71770.jpg"
                    />
                  </div>
                  <div className="img-desc">
                    윌리엄
                    <div className="img-desc-bottom">5분전</div>
                  </div>
                </div>
              </div>
              <div className="box-content-list">
                <div className="left-img-div">
                  <img alt="img" src="/images/circle.png" />
                  <img alt="img" src="/images/qy6kREqiE5ovCJ1Z.jpg" />
                </div>
                <div className="img-desc">
                  벤틀리
                  <div className="img-desc-bottom">16분전</div>
                </div>
              </div>
              <div className="box-content-list">
                <div className="left-img-div">
                  <img alt="img" src="/images/circle.png" />
                  <img
                    alt="img"
                    src="https://yt3.ggpht.com/a/AGF-l78nWFFcfHTnmj09ouv0pDyqKS3rI4bLs7sCbw=s288-c-k-c0xffffffff-no-rj-mo"
                  />
                </div>
                <div className="img-desc">
                  아리
                  <div className="img-desc-bottom">32분전</div>
                </div>
              </div>
              <div className="box-content-list">
                <div className="left-img-div">
                  <img alt="img" src="/images/circle.png" />
                  <img
                    alt="img"
                    src="https://yt3.ggpht.com/a/AGF-l78-D5Hmk3qtsR4-yrjcpcsBWQewB6VtBAEPtQ=s288-c-k-c0xffffffff-no-rj-mo"
                  />
                </div>
                <div className="img-desc">
                  소녀
                  <div className="img-desc-bottom">1시간전</div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-div">
            <div className="box-top">
              <div className="box-top-left">회원님을 위한 추천</div>
              <div className="box-top-right">모두 보기</div>
            </div>

            <div className="box-content-list">
              <img
                alt="img"
                src="http://pgs787.github.io/wecode_study/img/wecode.jpg"
              />
              <div className="img-desc">
                Wecode
                <div className="img-desc-bottom">
                  aprksl754님 외 2명이 팔로우 중입니다
                </div>
                <div className="follow">팔로우</div>
              </div>
            </div>
            <div className="box-content-list">
              <img alt="img" src="/images/ki.jfif" />
              <div className="img-desc">
                기성용
                <div className="img-desc-bottom">
                  pgs787 외 5명이 팔로우 중입니다
                </div>
                <div className="follow">팔로우</div>
              </div>
            </div>
            <div className="box-content-list">
              <img alt="img" src="/images/park.jfif" />
              <div className="img-desc">
                박지성
                <div className="img-desc-bottom">
                  zz_님 외 8명이 팔로우 중입니다
                </div>
                <div className="follow">팔로우</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Rightdiv;
