import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./Navbar.css";
import { Offers } from "./Offers";
import { Product } from "./Product";
import { cartContext } from "../App";
export const Navbar = () => {
  // using useContext
  let cartData: any = useContext(cartContext)
  // LOgout functinality.
  const LogOutHandler = () => {
    let confirm = window.confirm("Your account will logout..")
    if (confirm) {
      localStorage.clear()
    }
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light border-bottom">
        <div className="container-fluid">
          <img src={logo} alt="" />
          <form>
            <div className="input-group ms-3">
              <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button className="btn btn-light" type="button" id="button-addon2"> <i className="material-icons">&#xe8b6;</i></button>
            </div>

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
                  <span>  Hello SignIn to your account </span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to={'/signIn'}>signUp</Link>
                  </li>
                  <li>

                    <Link className="dropdown-item" to={'/Login'}>Login</Link>

                  </li>
                  <li>
                    <a className="dropdown-item" onClick={LogOutHandler}>LogOut</a>
                  </li>
                </ul>
              </li>
              <Link className="dropdown-item" to={"/Cart"} ><li className="nav-item ms-5">
                <i
                  className="fas fa-shopping-cart"
                  style={{ fontSize: "24px" }}
                ></i> <b style={{ fontSize: "20px" }}>{cartData.cart.length}</b>
                <span><a className="dropdown-item" href="//">cart</a> </span>
              </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <Offers />
      <Product />, useEffect
    </div>
  );
};
