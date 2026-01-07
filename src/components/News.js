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

  articles = [
    {
      source: {
        id: "news-com-au",
        name: "News.com.au",
      },
      author: "Alex Blair",
      title: "Rattled skipper’s meltdown says it all",
      description:
        "There were records met and runs aplenty on day two, but a brief exchange between Ben Stokes and Marnus Labuschagne was what captured the cricketing world’s attention most at the SCG on Monday.",
      url: "https://www.news.com.au/sport/cricket/the-ashes/ben-stokes-strange-labuschagne-incident-raises-bigger-questions-for-england/news-story/3a5816f6f446c6425a8a45bc8bfd9fe3",
      urlToImage:
        "https://content.api.news/v3/images/bin/12a5875140a8ee102e50d2db0e159ef4",
      publishedAt: "2026-01-05T08:42:00Z",
      content:
        "There were records met and runs aplenty on day two, but a brief exchange between Ben Stokes and Marnus Labuschagne was what captured the cricketing world’s attention most at the SCG on Monday.\r\nNobod… [+4192 chars]",
    },
    {
      source: {
        id: "australian-financial-review",
        name: "Australian Financial Review",
      },
      author: "Zoe Samios",
      title:
        "The Ashes Test: Sydney will ease financial blow for Cricket Australia, but it won’t be enough",
      description:
        "The Sydney Test looks set to run at least four days. It’s not enough to fix Melbourne’s financial blow, but the pain for Cricket Australia and TV networks may ease.",
      url: "http://www.afr.com/companies/sport/sydney-will-ease-the-ashes-financial-blow-but-it-won-t-be-enough-20260105-p5nroq",
      urlToImage:
        "https://static.ffx.io/images/$zoom_0.5447%2C$multiply_1%2C$ratio_1.777778%2C$width_1059%2C$x_1041%2C$y_169/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_no_label_no_age_social_wm/8e43abc7bb34766d2b9f1a804bdb6da9ad5c0b1b",
      publishedAt: "2026-01-05T06:58:44Z",
      content:
        "At 5.45am on Sunday, a line of weary-eyed cricket fans could be found snaking past the Sydney Cricket Ground and along the outside of Allianz Stadium.\r\nMost had been there for hours, embarking on an … [+188 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&catagory=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = fetch(url);
    let parsedData = data.then((data) => data.json());
    parsedData.then((myJson) => {
      this.setState({
        articles: myJson.articles,
        totalResults: myJson.totalResults,
        loading: false,
      });
    });
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
          NewsMonkey - Top Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
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
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
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
