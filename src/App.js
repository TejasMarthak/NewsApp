import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 15;

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
                  country="us"
                  apiKey="1add6ffb310d4b5fa6849c144e922bb7"
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
                  country="us"
                  apiKey="1add6ffb310d4b5fa6849c144e922bb7"
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
                  country="us"
                  apiKey="1add6ffb310d4b5fa6849c144e922bb7"
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
                  country="us"
                  apiKey="1add6ffb310d4b5fa6849c144e922bb7"
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
                  country="us"
                  apiKey="1add6ffb310d4b5fa6849c144e922bb7"
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
                  country="us"
                  apiKey="1add6ffb310d4b5fa6849c144e922bb7"
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
                  country="us"
                  apiKey="1add6ffb310d4b5fa6849c144e922bb7"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
