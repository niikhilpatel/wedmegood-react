import React from "react";
import "./Home.css";
import Swiper1 from "../Swiper/Swiper1";
import Swiper2 from "../Swiper/Swiper2";
import DAppSection from "../DownloadApp/DAppSection"
import fgImg1 from "../../images/cards/img1.jpg";
import fgImg2 from "../../images/cards/img2.jpg";
import fgImg3 from "../../images/cards/img3.jpg";
import fgImg4 from "../../images/cards/img4.jpg";
import fgImg5 from "../../images/cards/img5.jpg";
import fgImg6 from "../../images/cards/img6.jpg";
import Swiper3 from "../Swiper/Swiper3";




const Home = () => {
  return (
    <>
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
      <Swiper1 />
      <Swiper2 />


      <section>
        <div className="forth-page-section">
          <div className="container">
            <div className="forth_page">
              <div className="forth-page-head">
                <div className="forth-heading">Wedding Categories</div>
              </div>
              <div className="row gap20">
                <div className="forth-page-box col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="box-text col-6 col-sm-6 col-md-5 col-lg-5 col-xl-7">
                    <div className="box-text-head ">Vanues</div>
                    <div className="box-text-para">
                      Banquet Hall | Farmhouse | Lawn
                    </div>
                  </div>
                  <div className="box-img col-6 col-sm-6 col-md-7 col-lg-7 col-xl-5">
                    <div className="box-img-1">
                      <img
                        src={fgImg1}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="forth-page-box-2 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="box-text col-6 col-sm-6 col-md-5 col-lg-5 col-xl-7">
                    <div className="box-text-head ">Bridal Wear</div>
                    <div className="box-text-para">
                      Bridal Lehengas | Kanjeevaram | Saree
                    </div>
                  </div>
                  <div className="box-img col-6 col-sm-6 col-md-7 col-lg-7 col-xl-5">
                    <div className="box-img-1">
                      <img
                        src={fgImg2}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="forth-page-box-3 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="box-text col-6 col-sm-6 col-md-5 col-lg-5 col-xl-7">
                    <div className="box-text-head ">Wedding Makeup</div>
                    <div className="box-text-para">Bridal Makeup | Family Makeup</div>
                  </div>
                  <div className="box-img col-6 col-sm-6 col-md-7 col-lg-7 col-xl-5">
                    <div className="box-img-1">
                      <img
                        src={fgImg3} alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="forth-page-box-4 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div className="box-text col-6 col-sm-6 col-md-5 col-lg-5 col-xl-7">
                    <div className="box-text-head ">Photography</div>
                    <div className="box-text-para">
                      Wedding Shoot | Photooot | DSLR
                    </div>
                  </div>
                  <div className="box-img col-6 col-sm-6 col-md-7 col-lg-7 col-xl-5">
                    <div className="box-img-1">
                      <img
                        src={fgImg4} alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="forth-page-box-5 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="box-text col-6 col-sm-6 col-md-5 col-lg-5 col-xl-7">
                    <div className="box-text-head ">Wedding Planner</div>
                    <div className="box-text-para">
                      Weddnig Decoration | Function | Red Carpet
                    </div>
                  </div>
                  <div className="box-img col-6 col-sm-6 col-md-7 col-lg-7 col-xl-5">
                    <div className="box-img-1">
                      <img
                        src={fgImg5} alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="forth-page-box-6 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="box-text col-6 col-sm-6 col-md-5 col-lg-5 col-xl-7">
                    <div className="box-text-head ">Marrige Hall</div>
                    <div className="box-text-para">
                      Banquet Hall | Farmhouse | Lawn
                    </div>
                  </div>
                  <div className="box-img col-6 col-sm-6 col-md-7 col-lg-7 col-xl-5">
                    <div className="box-img-1">
                      <img
                        src={fgImg6} alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DAppSection/>
      <Swiper3/>
    
    </>

  );
};

export default Home;
