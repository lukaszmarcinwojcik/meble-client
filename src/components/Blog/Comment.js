import React from "react";
import "./Blog.css";

class Comment extends React.Component {
  state = {};
  render() {
    return (
      <section className="blog">
        <h2 className="titleblog">Andrzej</h2>
        <p>Bardzo ladne meble</p>
      </section>
    );
  }
}

export default Comment;