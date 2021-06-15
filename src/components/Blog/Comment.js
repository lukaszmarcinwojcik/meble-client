import React from "react";
import "./Comment.css";

class Comment extends React.Component {
  state = {};
  render() {
    return (
      <section className={"comment"}>
        <div className={"avatar"}></div>
        <p className={"authorComment"}>{this.props.author}</p>
        <p>{this.props.body}</p>
      </section>
    );
  }
}

export default Comment;
