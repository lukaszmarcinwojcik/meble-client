import React from "react";
import "./Blog.css";
import Comment from "./Comment"

class Article extends React.Component {
  state = {};
  render() {
    return (
      <section key={this.props.key} className="blog">
        <h3 className="titleblog">{this.props.title}</h3>
        <p>{this.props.body}</p>
        <p>{this.props.author}</p>
           <Comment/>
      </section>
    );
  }
}

export default Article;