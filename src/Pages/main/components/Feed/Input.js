import React, { Component } from "react";

class Input extends Component {
  state = {
    comment: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    // 상태값을 onCreate 를 통하여 부모에게 전달

    this.props.onCreate(this.state);
    console.log(this.state.comment);
    // 상태 초기화
    this.setState({
      comment: ""
    });
  };
  render() {
    return (
      <div className="add-comment-div">
        <textarea
          className="comment-input"
          name="comment"
          placeholder="댓글달기..."
          cols="65"
          rows="1"
          value={this.state.comment}
          onChange={this.handleChange}
          onKeyPress={e => {
            if (e.charCode === 13) {
              if (!e.shiftKey) {
                e.preventDefault();
                this.handleSubmit();
              }
            }
          }}
        ></textarea>
        <div
          className="add-comment-btn"
          style={{ color: this.state.comment ? "#3897f0" : "" }}
          onClick={this.handleSubmit}
        >
          게시
        </div>
      </div>
    );
  }
}

export default Input;
