import React from "react";
import { Link } from "react-router-dom";

const TopMenu = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            SHOPE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <button
                  className="btn nav-link dropdown-toggle font-weight-bold"
                  id="navbarDropdown"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  All Pages
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/account/signin">
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/signup">
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Checkout Page
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/contact-us">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Blog Detail
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      404 Page Not Found
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      500 Internal Server Error
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category">
                  SHOP
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product/detail">
                  PRODUCT
                </Link>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="btn nav-link dropdown-toggle font-weight-bold"
                  id="navbarDropdown"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  PAGES
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/blog">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/blog/Archives">
                      Contect us
                    </Link>
                  </li>
                  
                </ul>
              </li>
                <li className="nav-item">
                <Link className="nav-link" to="/blog/detail">
                  BLOGE
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  ELEMENTS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default TopMenu;
