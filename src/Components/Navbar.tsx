import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.png";
import "./Navbar.css";
import { Offers } from "./Offers";
import { Product } from "./Product";
export const Navbar = () => {


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light border-bottom">
        <div className="container-fluid">
          <img src={logo} alt="" />
          <form className="d-flex">
            <div className="input-group ms-5">
              <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
            </div>
            {/* <div className="input-group ms-5">
              <input
                type="text"
                className="form-control w-75"
                placeholder="Search your product.."
                aria-label="Search your products"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                <i className="material-icons">&#xe8b6;</i>
              </button>
            </div> */}
          </form>
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
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item ms-5">
                <i className="material-icons" style={{ fontSize: "34px" }}>
                  location_on
                </i>
                <span>Location</span>
              </li>

              <li className="nav-item dropdown ms-5">
                <a
                  className="nav-link dropdown-toggle"
                  href="//"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "black" }}
                >
                  <i className="fas fa-user-alt" style={{ fontSize: "24px" }}></i>
                  <span> Hello SignIn to your account </span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="//">
                      <Link to={'/signIn'}>signUp</Link>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="//">
                      2
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="//">
                      3
                    </a>
                  </li>
                </ul>
              </li>


              <li className="nav-item ms-5">
                <i
                  className="fas fa-shopping-cart"
                  style={{ fontSize: "24px" }}
                ></i>
                <span> <Link to={"/Cart"}>cart</Link> </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Offers />
      <Product />
    </div>
  );
};
