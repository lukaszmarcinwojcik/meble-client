import React from "react";
import "./Article.css";
import Comment from "./Comment";
import AddComment from "./AddComment";

class Article extends React.Component {
  state = { isActiveAddComment: false };
  handelShowAddComment = () => {
    this.setState({
      isActiveAddComment: !this.state.isActiveAddComment,
    });
  };
  render() {
    const commentList = this.props.commentList.map((comment) => (
      <Comment
        author={comment.author}
        body={comment.body}
        createdAt={comment.createdAt}
      />
    ));

    return (
      <>
        <section className={"article"} key={this.props.key}>
          <div className={"articleNav"}>
            <div
              className={"prevArticle"}
              onClick={this.props.handlePrevArticle}
            ></div>
            <div className={"articleTitle"}>
              <h3>{this.props.title}</h3>
            </div>
            <div
              className={"nextArticle"}
              onClick={this.props.handleNextArticle}
            ></div>
          </div>
          {/* <div className={"articleImage"}> */}
          <img className={"articleImage"} src={this.props.picture} alt=""></img>
          {/* </div> */}
          <div className={"articleContent"}>
            <p>{this.props.body}</p>
            <p>{this.props.author}</p>
          </div>
        </section>
        <section className={"commentList"}>
          <p>komentarze 700</p>
          <div
            className={"btnShowAddComment"}
            onClick={this.handelShowAddComment}
          >
            dodaj komentarz...
          </div>
          {this.state.isActiveAddComment ? (
            <AddComment
              _id={this.props._id}
              handelShowAddComment={this.handelShowAddComment}
              updateArticle={this.props.updateArticle}
            />
          ) : null}

          {commentList}
        </section>
      </>
    );
  }
}

export default Article;
