import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container px-lg-5">
            <a className="navbar-brand" href="#!">
              Start Bootstrap
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#!">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header class="py-5">
          <div class="container px-lg-5">
            <div class="p-4 p-lg-5 bg-light rounded-3 text-center">
              <div class="m-4 m-lg-5">
                <h1 class="display-5 fw-bold">A warm welcome!</h1>
                <p class="fs-4">
                  Bootstrap utility classes are used to create this jumbotron
                  since the old component has been removed from the framework.
                  Why create custom CSS when you can use utilities?
                </p>
                <a class="btn btn-primary btn-lg" href="#!">
                  Call to action
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
