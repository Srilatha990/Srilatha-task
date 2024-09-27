

import React from 'react'

function Footer() {
  return (
    <div className='footer-sec'>
        <div className='container'>
            <div className='row f-cnt'>
                <div className='col-3 first'>
                    <div>
                        <img src='../../images/logo.png' className='logo'/>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className='location mt-4'>
                        <a><span className='bi bi-geo-alt'></span>Ohio St. South Gate, CA 90280</a>
                        <a><span className='bi bi-envelope'></span>johndoe@yahoo.com</a>
                        <a><span className='bi bi-telephone'></span>+1 386-688-3295</a>
                    </div>
                </div>
                <div className='col-2 resource'>
                    <h3>Resources</h3>
                    <a>Contact us</a>
                    <a>Products</a>
                    <a>Shops</a>
                    <a>Campaigns</a>
                </div>
                <div className='col-2 about'>
                    <h3>About Us</h3>
                    <a>About us</a>
                    <a>Privacy Policy</a>
                    <a>Terms and conditions</a>
                    <a>Refund return policy</a>
                </div>
                <div className='col-5 subscription'>
                    <h3>Join a Newsletter</h3>

                    <div className='add mt-3'>
                    <input type='text' placeholder='Enter your Email' className='search'/>
                    <button className='s-btn'>Subscribe</button>
                    </div>
                    <div className='mt-4 social-links'>
                        <button className='f-btn'><span className='bi bi-facebook'></span></button>
                        <button className='f-btn'><span className='bi bi-instagram'></span></button>
                        <button className='f-btn'><span className='bi bi-linkedin'></span></button>
                    </div>
                </div>
                <hr className='mt-5'/>
                
            </div>
            <div className='row text-center'>
                <p>© 2024 Nextall. All rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer