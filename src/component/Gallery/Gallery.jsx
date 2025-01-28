import React from 'react'
import "./Gallery.css"
import Img1 from "../../images/Gallery/img1.jpg"
import Img2 from "../../images/Gallery/img2.jpg"
import Img3 from "../../images/Gallery/img3.jpg"
import Img4 from "../../images/Gallery/img4.jpg"
import Img5 from "../../images/Gallery/img5.jpg"
import Img6 from "../../images/Gallery/img6.jpg"
import Img7 from "../../images/Gallery/img7.jpg"
import Img8 from "../../images/Gallery/img8.jpg"
import Img9 from "../../images/Gallery/img9.jpg"
import Img10 from "../../images/Gallery/img10.jpg"
import Img11 from "../../images/Gallery/img11.jpg"
import Img12 from "../../images/Gallery/img12.jpg"
import Img13 from "../../images/Gallery/img13.jpg"
import Img14 from "../../images/Gallery/img14.jpg"
import Img15 from "../../images/Gallery/img15.jpeg"
// import Img16 from "../../images/Gallery/img16.jpg"
// import Img17 from "../../images/Gallery/img17.jpg"
import Img18 from "../../images/Gallery/img18.jpg"
import Img19 from "../../images/Gallery/img19.jpg"

const Gallery = () => {
  return (
    <>
      <section>

        <div className='first-banner'>
          <div className='container'>
            <div className='row'>
              <div className='col-6 left-side'>
                <div className='heading'>Showcasing<br />
                  Our Best Memories !
                </div>
                <div className='para'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel magni ex consequatur ullam odio nulla facilis, voluptatum molestiae nesciunt ad deleniti praesentium quasi ducimus obcaecati numquam ipsa adipisci maxime.
                </div>
                <div className='subheading'>
                  Upload your story with us
                </div>
                <div className='button'>
                  Upload Image
                </div>
                <div className='icon'>
                  download logo
                  camera logo
                </div>
              </div>
              <div className='col-6 first-row-image'>
                <div className=' first-row-image-1'>
                  <img src={Img1} />
                </div>
                <div className='first-row-image-2 col-12 d-flex gap-2'>
                  <div>
                    <img src={Img2} />
                  </div>
                  <div>
                    <img src={Img3} />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-6 row-1-left'>
              <img src={Img4} />

            </div>
            <div className='col-6 row-1-right'>
              <div className='row'>

                <div className='col-6'>
                  <img src={Img5} />
                </div>
                <div className='col-6'>
                  <img src={Img6} />
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <img src={Img7} />
                </div>
                <div className='col'>
                  <img src={Img8} />
                </div>
              </div>
            </div>

          </div>
          <div className='row'>
            <div className='col-4 row-2-left'>
              <img src={Img9} />

            </div>
            <div className='col-8 row-2-right'>
              <img src={Img10} />

            </div>

          </div>
          <div className='row row-3-image'>
            <div className='col-4 row-31'>
              <img src={Img11} />
            </div>
            <div className='col-4 row-32'>
              <img src={Img12} />
            </div>
            <div className='col-4 row-33'>
              <img src={Img13} />
            </div>
          </div>
          <div className='row'>
            <div className='col-8 row-4-left'>
              <img src={Img19} />

            </div>
            <div className='col-4 row-4-right'>
              <img src={Img18} />

            </div>

          </div>

        </div>
      </section>
      <section>
        <div className='container-fluid'>
          <div className='row'>
            <div className='last-section'>
              <div className='col-6 heading'>
                We Created Memories !
              </div>
              <div className='col-6 para'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima odit quis voluptatem natus ratione obcaecati soluta neque at eveniet. Eum nesciunt inventore libero, nobis id exercitationem nam rerum. Facilis, eos.
              </div>
              <div className='third-line'>

                <div className='text'>
                  Upload Your Image :
                </div>
                <div className='button'>
                  Choose Files
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery