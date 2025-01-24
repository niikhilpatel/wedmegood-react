import React from 'react'
import Logo from "../../images/Footer/footer-logo.jpg"
import Instagram from "../../images/Footer/insta.png"
import Facebook from "../../images/Footer/facebook.png"
import X from "../../images/Footer/x.png"
import Linkedin from "../../images/Footer/linkedin.png"
import "./footer.css"

const Footer = () => {
    return (
        <>
        
        <hr/>
        <footer>
            <div className='container'>
                <div className='row my-5'>
                    <div className='row footer-div col-3 d-flex justify-content-center'>
                        <div className='mb-3'>
                            <div className='col-6 '>
                                <img src={Logo} style={{width:"200px", height:"auto"}}/>
                            </div>
                            <div className='we-connect-div'>
                                We connect the Multiverse!
                            </div>
                        </div>
                        <div className='footer-heading'>
                            Connect With US
                        </div>
                        <div className='social-icon-style'>
                            <div>
                                <img src={Instagram} alt=''/>
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
                    <div className='col-3'>
                        <div className='footer-heading'>
                        Wedding Ideas

                        </div>
                        <div className='footer-subheading'>
                            <li><a href='#'>Wedding Blog</a></li>
                            <li><a href='#'>Wedding Inspiration</a></li>
                            <li><a href='#'>Real Wedding</a></li>
                            <li><a href='#'>Submit Wedding</a></li>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='footer-heading'>
                        Photo Gallery

                        </div>
                        <div className='footer-subheading'>
                            <li><a href='#'>Bridal Wear</a></li>
                            <li><a href='#'>Wedding Jewellery</a></li>
                            <li><a href='#'>Bridal Makeup & Hair</a></li>
                            <li><a href='#'>Wedding Decor</a></li>
                            <li><a href='#'>Wedding Photography</a></li>
                            <li><a href='#'>Groom Wear</a></li>
                            <li><a href='#'>Invitations & Favors</a></li>
                            <li><a href='#'>Wedding Accessories</a></li>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='footer-heading'>
                        Wedding Invitation Maker
                        </div>
                        <div className='footer-subheading'>
                            <li><a href='#'>Wedding Card Designs</a></li>
                            <li><a href='#'>Save the Date Templates</a></li>
                            <li><a href='#'>Invitation Video Templates</a></li>
                            <li><a href='#'>Cancellation Policy</a></li>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer