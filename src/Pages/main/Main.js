import React from "react";
import "./main.scss";
import Nav from "./components/Nav/Nav";
import Feed from "./components/Feed/Feed";
import Rightdiv from "./components/Rightdiv/Rightdiv";
import axios from "axios";

class Main extends React.Component {
  state = {
    feedInfo: []
  };
  componentDidMount = () => {
    this.getFeedItems();
  };
  getFeedItems = async () => {
    await axios("https://pgs787.github.io/asdasdsa/feed.json").then(res =>
      this.setState({ feedInfo: res.data })
    );
  };
  mapOfFeed = data => {
    return data.map(feed => <Feed data={feed} />);
  };
  render() {
    return (
      <>
        <Nav />
        <div className="main-wrapper">
          <div className="feed-wrapper">
            {this.mapOfFeed(this.state.feedInfo)}
          </div>
          <Rightdiv />
        </div>
      </>
    );
  }
}

export default Main;
