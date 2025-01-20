import React from "react";
import "./Home.css";


const Home = () => {
  return (
    <section>
      <div className="Home-section">
        <div className="container-fluid">
          <div className="Home">
            <div className="Home-content">
              <div className="Home-head">
                <div className="Home-heading">Your Wedding, Your Way</div>
                <div className="Home-sub-heading">
                  Find the best wedding vendors with thousands of trusted
                  reviews
                </div>
              </div>
              <div className="Home-Input">
                <div className="input-1">
                  <input type="text" placeholder="Search Venue" />
                  <button></button>
                </div>
                <div className="input-1">
                  <input type="text" placeholder="Search City" />
                  <button></button>
                </div>
                <div className="get-started-btn">
                  <a className="" href="#">
                    <button>Get Started</button>
                  </a>
                </div>
              </div>
              <div className="Home-para">
                Popular Searches: Wedding Photographers in India | Bridal Makeup
                Artists in IndiaWedding | Cards in India | Wedding Venues in
                India
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
