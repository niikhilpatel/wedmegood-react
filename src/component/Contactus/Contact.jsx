import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <>
      <div className='contact'>
        <div className='container'>
          <div className='contact-content col-6'>
            <div>
              <div className='first-two-line'>
                <div className='heading'>
                  Feel free to Contact !
                </div>
                <div className='para'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
                  Tenetur veniam explicabo, modi at nisi consequuntur!
                </div>
              </div>
              <div className='second-two-line'>
                <div>
                  <input type="text" placeholder='Name' />
                </div>
                <div>
                  <input type="text" placeholder='Email' />
                </div>
                <div className='d-flex gap-2 pr-5'>
                  <input type="text" placeholder='Phone Number' />

                  <input type="text" placeholder='City' />

                </div>
              </div>
              <textarea name="" id="" cols="63" rows="5" placeholder='Message' style={{ borderRadius: "10px", border: "1px solid #c7b7b7" }}>

              </textarea>
            </div>
            <div className='submit-btn'>
              Submit
            </div>
          </div>

          <div className='contact-img col-6 '>

          </div>
        </div>

      </div >
    </>
  )
}

export default Contact