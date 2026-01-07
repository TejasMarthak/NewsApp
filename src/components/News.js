import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsMonkey`;
  }

  // async updateNews() {
  //   try {
  //     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //     this.setState({ loading: true });
  //     let data = await fetch(url);
  //     let parsedData = await data.then((data) => data.json());
  //     parsedData.then((myJson) => {
  //       this.setState({
  //         articles: myJson.articles,
  //         totalResults: myJson.totalResults,
  //         loading: false,
  //       });
  //     });
  //   } catch (error) {}
  // }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });

    try {
      let response = await fetch(url);
      let parsedData = await response.json();

      // Only update state if the API call was successful
      if (parsedData.status === "ok") {
        this.setState({
          articles: parsedData.articles || [],
          totalResults: parsedData.totalResults,
          loading: false,
        });
      } else {
        // If API returns an error (like 'Rate Limit Exceeded')
        console.error("API Error Message:", parsedData.message);
        this.setState({ loading: false, articles: [] });
      }
    } catch (error) {
      // If the internet is down or the URL is wrong
      console.error("Network Error:", error);
      this.setState({ loading: false, articles: [] });
    }
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles &&
            this.state.articles.map((element) => {
              return (
                <div className="col md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name ? element.source.name : ""}
                  />
                </div>
              );
            })}
        </div>
        {!this.state.loading && this.state.articles.length === 0 && (
          <div className="text-center my-5">
            <h3>
              Unable to load news. Please check your API key or connection.
            </h3>
          </div>
        )}
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
