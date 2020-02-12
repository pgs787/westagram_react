import React, { Component } from "react";

class Commentlist extends Component {
  handlecheck = id => {
    const { onDelete } = this.props;
    onDelete(id);
  };
  handlecheck = id => {
    const { onDelete } = this.props;
    onDelete(id);
  };

  mapOfComment = data => {
    return data.map(info => (
      <div
        className="comment-list"
        key={info.id}
        style={{ display: "flex", position: "relative" }}
      >
        <span style={{ fontWeight: "600" }}>gisung &nbsp;</span>
        <div className="comment_origin">{info.comment}</div>
        <div
          className="xbox"
          onClick={() => {
            this.handlecheck(info.id);
          }}
        >
          ✖
        </div>
      </div>
    ));
  };

  render() {
    const { data } = this.props;
    return (
      <div className="comment-list-div">
        <div className="comment-list" style={{ whiteSpace: "unset" }}>
          <a>gisung </a>
          <span />
          자주 보는 유튜브 채널 아리!
        </div>
        <div className="comment-list" style={{ whiteSpace: "unset" }}>
          <a>gisung</a>
          <span style={{ color: "#02386e" }} />
          &nbsp; #아리둥절 #생긴거랑 다르게 놈 #겁나귀여움#똑똑한식빵
          <br />
        </div>
        {this.mapOfComment(data)}
      </div>
    );
  }
}

export default Commentlist;
