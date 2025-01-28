import React from 'react'
import FirstImg from "../../images/Venues/first-img.jpg"
import "./Venues.css"
import Logo from "../../images/Venues/logo.png"
import CenterImg from "../../images/Venues/first-center-img.png"
import Row11 from "../../images/Venues/row11.jpg"
import Row12 from "../../images/Venues/row12.jpg"
import Row13 from "../../images/Venues/row13.jpg"
import Row21 from "../../images/Venues/row21.jpg"
import Row22 from "../../images/Venues/row22.jpg"
import Row23 from "../../images/Venues/row-23.jpg"

const Venues = () => {
  return (
    <>
      <section>
        <div>

          <div className='center-img'>
            <div className='center-img-div'>
              <img src={Logo} />
              <div className='center-img-text'>
                <img src={CenterImg} />
                <div className='text'>We Connect the Multiverse!</div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section>
        <div className='container'>
          <div className='second-section-heading'>
            <div className='second-section-heading-text'>
              Our Services
            </div>
            <div className='second-section-heading-para'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quidem? Explicabo reiciendis illum inventore in ipsum dolor sit amet. numquam amet dicta tempore, pariatur eveniet exercitationem praesentium nesciunt sit? Nemo magni esse accusamus umquam amet consequatur?
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='all-row'>
              <div className='first-row'>
                <div className='col-4 card-1'>
                
                </div>
                <div className='col-4 card-2'>

                </div>
                <div className='col-4 card-3'>

                </div>
              </div>
              <div className='first-row'>
                <div className='col-4 card-4'>

                </div>
                <div className='col-4 card-5'>

                </div>
                <div className='col-4 card-6'>

                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='venues-last-section'>
              <div className='heading'>
              Plan a Wedding Ceremony
              </div>
              <div className='para'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto veniam fugiat odit, labore consequuntur sapiente perferendis eum ut dolorum obcaecati dolorem distinctio dolores consequatur dicta nam unde doloremque magni, corporis nostrum porro quod eius. Nulla similique voluptas quas culpa perferendis! Exercitationem, obcaecati eligendi ea ipsa accusantium perspiciatis labore beatae officiis.              </div>
              <div className='third-line'>
                <div className='button'>
                  Lets Start
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Venues