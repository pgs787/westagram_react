import React from "react";
import "./Feed.scss";
import Input from "./Input";
import Commentlist from "./Commentlist";
class Feed extends React.Component {
  id = 0;
  state = {
    information: []
  };
  handleCreate = data => {
    const { information } = this.state;
    console.log(this.state);
    this.setState({
      information: [...information, { id: this.id++, ...data }]
    });
  };
  handleDelete = id => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  };
  handlecheck = id => {
    const { onDelete } = this.props;
    onDelete(id);
  };
  mapOfComment = data => {
    return data.map(info => (
      <div
        className="comment-list"
        onClick={() => {
          this.handlecheck(info.id);
        }}
        key={info.id}
      >
        <span style={{ fontWeight: "600" }}>gisung &nbsp;</span>
        <span>{info.comment}</span>
      </div>
    ));
  };
  render() {
    const { information } = this.state;
    return (
      <div className="feed-wrapper">
        <div className="feed-div">
          <div className="feed-top">
            <img
              alt="img"
              src="http://pgs787.github.io/wecode_study/img/my.jpg"
            />
            <span />
            gisung
            <img
              alt="img"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
              style={{
                position: "absolute",
                right: "5px",
                height: "40px "
              }}
            />
          </div>
          <iframe
            width="680"
            height="500"
            src="https://www.youtube.com/embed/TUUoq8qKbGk"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="feed-bottom">
            <div className="feed-bottom-first">
              <img
                alt="img"
                className="heart"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />
              <img
                alt="img"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
              />
              <img
                alt="img"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
              />
              <img
                alt="img"
                src="http://pgs787.github.io/wecode_study/img/다운로드.png"
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  right: "5px",
                  height: "30px"
                }}
              />
            </div>
            <span style={{ marginLeft: " 20px", cursor: "pointer" }} />
            좋아요 <span className="like" />
            1개
            <br />
            <Commentlist data={information} onDelete={this.handleDelete} />
            <div
              style={{
                margin: "10px 20px",
                color: "#2b2b2b42",
                fontSize: "12px"
              }}
            >
              22시간전
            </div>
            <Input onCreate={this.handleCreate} />
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
