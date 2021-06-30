import React from "react";
import "./AddComment.css";

class AddComment extends React.Component {
  state = { nick: "", body: "", article: "" };
  handleCommentChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleAddNewComment = (e) => {
    e.preventDefault();
    const { nick, body } = this.state;
    if (nick === "" && body === "") {
      alert("Wpisz nick oraz treść komentarza");
      return;
    } else if (body === "") {
      alert("Wpisz terść komentarza");
      return;
    } else if (nick === "") {
      alert("Wpisz nick");
      return;
    }

    const article = this.props._id;
    fetch("http://localhost:5000/article/comment/add", {
      method: "POST",
      body: JSON.stringify({
        author: nick,
        body: body,
        article: article,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({});
        alert("dodano komentarz");
        this.props.updateArticle();
        this.props.handelShowAddComment();
      });
  };
  render() {
    return (
      <section className={"addComment"}>
        <label htmlFor="nick">
          Nick:
          <input
            className={"commentNick"}
            type="text"
            id="nick"
            name="nick"
            value={this.state.nick}
            onChange={this.handleCommentChange}
          />
        </label>
        <label htmlFor="body">
          Treść:
          <textarea
            className={"commentText"}
            type="text"
            id="body"
            name="body"
            value={this.state.body}
            onChange={this.handleCommentChange}
          />
        </label>
        <button className={"btnAddComment"} onClick={this.handleAddNewComment}>
          Dodaj nowy komentarz
        </button>
      </section>
    );
  }
}

export default AddComment;
