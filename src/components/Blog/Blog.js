import React from "react";
import "./Blog.css";
import Article from "./Article";

const articleList = "https://meble-api.herokuapp.com/article";

class Blog extends React.Component {
  state = {
    articleList: null,
    articleNumber: 0,
    articleLength: 0,
  };

  handleNextArticle = () => {
    if (this.state.articleNumber === this.state.articleLength - 1) {
      this.setState({
        articleNumber: 0,
      });
    } else {
      this.setState({
        articleNumber: this.state.articleNumber + 1,
      });
    }
  };
  handlePrevArticle = () => {
    if (this.state.articleNumber === 0) {
      this.setState({
        articleNumber: this.state.articleLength - 1,
      });
    } else {
      this.setState({
        articleNumber: this.state.articleNumber - 1,
      });
    }
  };
  getArticleList = () => {
    fetch(articleList)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((articleList) => {
        let articleLength = articleList.length;
        this.setState({
          articleList: articleList,
          articleLength: articleLength,
        });
      })
      .catch((error) => console.log(error));
  };
  updateArticle = () => {
    this.getArticleList();
  };
  componentDidMount() {
    this.getArticleList();
  }
  render() {
    let { articleList, articleNumber } = this.state;

    return (
      <section id="blog" className={"blog"}>
        <div className={"separator"}></div>
        <h1 className="titleblog">WITAJ NA NASZYM BLOGU</h1>
        {this.state.articleList ? (
          <Article
            handleNextArticle={this.handleNextArticle}
            handlePrevArticle={this.handlePrevArticle}
            updateArticle={this.updateArticle}
            _id={articleList[articleNumber]._id}
            title={articleList[articleNumber].title}
            body={articleList[articleNumber].body}
            author={articleList[articleNumber].author}
            picture={articleList[articleNumber].picture}
            commentList={articleList[articleNumber].comment}
          />
        ) : null}
      </section>
    );
  }
}

export default Blog;
