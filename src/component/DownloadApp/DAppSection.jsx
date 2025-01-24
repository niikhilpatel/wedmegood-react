import React from 'react'
import "./DApp.css"
import MobileImg from "../../images/About/mobile-img.png"
import Hearticon from "../../images/About/Heart.gif"
import Cart from "../../images/About/cart.png"
import Note from "../../images/About/note.png"
import Dialer from "../../images/About/dial-pad.png"
import Play from "../../images/About/play-button-arrowhead.png"
import Spider from "../../images/About/spider.png"

const DAppSection = () => {
  return (

        <section>
        <div className='container'>
          <div className='third-section'>


            <div className='row'>
              <div className='col-7 download-app-left'>
                <div className='third-heading'>
                  Download The WedMeGood Mobile App Today!
                </div>
                <div className='third-second-line'>
                  <div className='third-second-line-icon'>
                    <div>
                      <img src={Note} alt=""/>
                    </div>
                    <div>Save Wedding Ideas
                    </div>
                  </div>
                  <div className='third-second-line-icon'>
                    <div>
                      <img src={Hearticon} alt=""/>

                    </div>
                    <div>Shortlist Vendors

                    </div>
                  </div>
                  <div className='third-second-line-icon'>
                    <div>
                      <img src={Cart} alt=""/>

                    </div>
                    <div>Get Free Wedding Checklist

                    </div>
                  </div>
                </div>
                <div>
                  <div className='third-third-line'>
                    You will receive an SMS with a link to download the App
                  </div>
                  <div className='dialer'>
                    <img src={Dialer} alt="" />
                    +91_________________________________
                  </div>
                  <div className='col-7'>
                    <a href='#' className='button'>
                      Download APP
                    </a>
                  </div>
                  <div className='third-last-line col-7'>
                    <img src={Play} alt=''/>
                    <img src={Spider} alt=''/>
                  </div>

                </div>
              </div>

              <div className='col-4 third-section-right'>
                <img src={MobileImg} alt="" />
              </div>
            </div>
          </div>
        </div>

      </section >
  )
}

export default DAppSection