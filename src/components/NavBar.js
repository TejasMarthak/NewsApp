import React, { Component } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-body-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsMonkey
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  General
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Business">
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Entertainment">
                  Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Health">
                  Health
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Science">
                  Science
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Sports">
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Technology">
                  Technology
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
