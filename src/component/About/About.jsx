import React from 'react'
import "./about.css"
import DAppSection from "../DownloadApp/DAppSection"
import Logo from "../../images/About/logo.jpg"
import Instagram from "../../images/Footer/insta.png"
import Facebook from "../../images/Footer/facebook.png"
import X from "../../images/Footer/x.png"
import Linkedin from "../../images/Footer/linkedin.png"
import Secondsectionimg from "../../images/About/second-section-img.jpg"
import MobileImg from "../../images/About/mobile-img.png"
import Hearticon from "../../images/About/Heart.gif"
import Cart from "../../images/About/cart.png"
import Note from "../../images/About/note.png"
import Dialer from "../../images/About/dial-pad.png"
import Play from "../../images/About/play-button-arrowhead.png"
import Spider from "../../images/About/spider.png"

const About = () => {
  return (
    <>
      <section>
        <div className='container'>
          <div className="first-section">
            <div className='first-section-div'>



              <div className='about-logo'>
                <img src={Logo} />

              </div>
            </div>
            <div className='first-section-div'>

              <div className='para'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam facere cupiditate sapiente perspiciatis nam, doloribus unde quidem? Dolor, animi cum. Tempore doloribus error doloremque perferendis voluptates in architecto, ad quas nobis quia deserunt, ea cumque commodi fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, facilis! Tenetur ea ipsum laudantiums incidunt, ex, non mollitia ipsa!

              </div>
            </div>
            <div className='first-section-div'>

              <div className='d-flex'>
                <div className='connect-with-us'>
                  Connect With Us :

                </div>
                <div className='social-icon-style'>
                  <div>
                    <img src={Instagram} alt='' />
                  </div>
                  <div>
                    <img src={Facebook} alt='' />
                  </div>
                  <div>
                    <img src={X} alt='' />
                  </div>
                  <div>
                    <img src={Linkedin} alt='' />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className='second-section'>
        <div className='second-section-div'>

          <img src={Secondsectionimg} alt="" />
        </div>
      </section>
      <DAppSection/>
      
    </>
  )
}

export default About