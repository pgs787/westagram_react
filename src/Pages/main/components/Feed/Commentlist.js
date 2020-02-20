import React, { Component } from "react";

class Commentlist extends Component {
  state = {
    id: 0,
    editCheck: false
  };
  handlecheck = id => {
    const { onDelete } = this.props;
    onDelete(id);
  };

  mapOfComment = (data, dd) => {
    return data.map(info => (
      <div
        className="comment-list"
        key={info.id}
        style={{ display: "flex", position: "relative" }}
      >
        <span style={{ fontWeight: "600" }}>{dd.nick} &nbsp;</span>
        <div
          className="comment_origin"
          onClick={() => {
            this.handleEdit(info.id);
          }}
        >
          {this.state.editCheck ? (
            <input
              className={`comment-re ${info.id}`}
              type="text"
              value={info.comment}
            />
          ) : (
            info.comment
          )}
        </div>
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
    const { data, info } = this.props;
    return (
      <div className="comment-list-div">
        <div className="comment-list" style={{ whiteSpace: "unset" }}>
          <a>{info.nick}</a>
          <span style={{ color: "#02386e" }} />
          &nbsp; {info.comment}
          <br />
        </div>
        {this.mapOfComment(data, info)}
      </div>
    );
  }
}

export default Commentlist;
