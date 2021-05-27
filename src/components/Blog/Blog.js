import React from "react";
import "./Blog.css";
import Article from "./Article";

class Blog extends React.Component {
  state = {
    articles: [
      {
        _id: "001",
        title: "Materialy",
        author: "Andrzej Kowalski",
        body: "Do naszych mebli uzylismy najlepszych materialow z debu i orzecha",
      },
      {
        _id: "002",
        title: "Design",
        author: "Janusz Nowak",
        body: "Design naszych mebli jest ponadczasowy i uniwersalnych",
      },
      {
        _id: "003",
        title: "Wytrzymalosc",
        author: "Andrzej Kowalski",
        body: "Nasze meble sa tak wytrzymale ze ja niemoge i omatkobosko",
      },
      {
        _id: "004",
        title: "Ergonomia",
        author: "Eugeniusz Zbyszek",
        body: "Jedna z wielu zalet naszych mebli jest ergonomia elegancksa",
      },
    ],
  };
  render() {
    const articlesList = this.state.articles.map((article) => (
      <Article
        key={article._id}
        title={article.title}
        body={article.body}
        author={article.author}
      />
    ));
    return (
      <section id="blog" className="blog">
        <h1 className="titleblog">Witaj na naszym blogu</h1>
        {articlesList}
      </section>
    );
  }
}

export default Blog;
