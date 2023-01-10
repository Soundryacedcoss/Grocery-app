import React from "react";
import logo from "../images/logo.png";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <img src={logo} alt="" />
          <form class="d-flex">
            <div class="input-group mb-7 ms-5">
              <input
                type="text"
                class="form-control w-75"
                placeholder="Search your product.."
                aria-label="Search your products"
                aria-describedby="button-addon2"
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                <i class="material-icons">&#xe8b6;</i>
              </button>
            </div>
          </form>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item ms-5">
                <i class="material-icons" style={{ fontSize: "24px" }}>
                  location_on
                </i>
                <span>Location</span>
              </li>

              <li class="nav-item dropdown ms-5">
                <a
                  class="nav-link dropdown-toggle"
                  href="//"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{color:"black"}}
                >
                  <i class="fas fa-user-alt" style={{ fontSize: "24px" }}></i>
                  <span>Hello SignIn to your account</span>
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="//">
                      1
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="//">
                      2
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="//">
                      3
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item ms-5">
                <i
                  class="fas fa-shopping-cart"
                  style={{ fontSize: "24px" }}
                ></i>
                <span>cart</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
