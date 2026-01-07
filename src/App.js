import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 8;
  country = "us";
  apiKey = "1add6ffb310d4b5fa6849c144e922bb7";
  /*bf432cd212ee46c4a0fdce79ba586a81 - t*/
  /*1add6ffb310d4b5fa6849c144e922bb7 - c*/

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key={"general"}
                  pageSize={this.pageSize}
                  category="general"
                  country={this.country}
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  key={"business"}
                  pageSize={this.pageSize}
                  category="business"
                  country={this.country}
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key={"entertainment"}
                  pageSize={this.pageSize}
                  category="entertainment"
                  country={this.country}
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  key={"health"}
                  pageSize={this.pageSize}
                  category="health"
                  country={this.country}
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  key={"science"}
                  pageSize={this.pageSize}
                  category="science"
                  country={this.country}
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  key={"sports"}
                  pageSize={this.pageSize}
                  category="sports"
                  country={this.country}
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  key={"technology"}
                  pageSize={this.pageSize}
                  category="technology"
                  country={this.country}
                  apiKey={this.apiKey}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
