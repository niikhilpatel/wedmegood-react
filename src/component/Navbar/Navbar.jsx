import React from "react";
import "./Navbar.css";
import logo from "../../images/header/logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="Navbar-section">
        <div className="container-fluid">
          <div className="Navbar col-12">
            <div className="Nav-Logo col-3">
              <div className="Logo">
                <Link to={"/"}>
                  <img src={logo} alt="Main-Logo" />
                </Link>
                {/* <a aria-current="page" className="active" href="/WedMeGood/"> */}
                {/* </a> */}
              </div>
            </div>
            <div className="Nav-menu col-6">
              <div className="Nav-List">
                <div className="List col-3">
                  <Link to={"/About"}>About US</Link>
                </div>
                <div className="List col-3">
                  <Link to={"/Venues"}>Venues</Link>
                </div>
                <div className="List col-3">
                  <Link to={"Gallery"}>Gallery</Link>
                </div>
                <div className="List col-3">
                  <Link to={"/Contact"}>Contact</Link>
                </div>
              </div>
            </div>
            <div className="Nav-Login col-3">
              <div className="search-btn col-4">
                <div className="search-btn-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width={100}
                    height={100}
                    viewBox="0 0 50 50"
                  >
                    <path d="M 21 3 C 11.654545 3 4 10.654545 4 20 C 4 29.345455 11.654545 37 21 37 C 24.701287 37 28.127393 35.786719 30.927734 33.755859 L 44.085938 46.914062 L 46.914062 44.085938 L 33.875 31.046875 C 36.43682 28.068316 38 24.210207 38 20 C 38 10.654545 30.345455 3 21 3 z M 21 5 C 29.254545 5 36 11.745455 36 20 C 36 28.254545 29.254545 35 21 35 C 12.745455 35 6 28.254545 6 20 C 6 11.745455 12.745455 5 21 5 z" />
                  </svg>
                </div>
              </div>
              <div className="Nav-Login-btn col-8">
                <button data-bs-toggle="modal" data-bs-target="#loginModal">
                  Login
                </button>
              </div>
            </div>
            <div id="searchbar-btn" className="searchbar-btn-section d-none">
              <input type="text" placeholder="Search Here" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
