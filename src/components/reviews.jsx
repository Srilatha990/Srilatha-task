
import React from 'react'

function Reviews() {
  return (
    <div className='review-sec'>
        <div className='container'>
            <div className='row review-content'>
                <div className='col-lg-6 col-sm-12 left'>
                    <h1>Let's explore customer sentiments towards our offerings.</h1>
                    <p>Discover what customers are saying about our products. Dive into the feedback on the quality and performance of our offerings. Gain insights into how our customers perceive our products and their overall satisfaction. Your opinions matter, and we're here to listen...</p>
                    <div className='arrows mt-3'>
                        <button className='btn'><span className='bi bi-arrow-left'></span></button>
                        <button className='btn'><span className='bi bi-arrow-right'></span></button>
                    </div>
                </div>
                <div className='col-lg-6  col-sm-12 r'>
                    <div className='css-mddo59'>
                        <div className='review-box'>
                            <div className='stars'>
                            <span className='bi bi-star-fill'></span>
                            <span className='bi bi-star-fill'></span>
                            <span className='bi bi-star-fill'></span>
                            <span className='bi bi-star-fill'></span>
                            <span className='bi bi-star-fill'></span>
                            </div>
                            <p>Exceptional shopping experience! The user-friendly interface and seamless navigation make finding and purchasing products a breeze. As a Marketing Manager, I appreciate the...</p>
                            <div className='r-img'>
                            <img src='../../images/review-img.png'/>
                            </div>
                            <div className='r-box'>
                            <div className='css-7hss4z'>
                                <div className='reviews'>
                                    <div className='patch'>
                                        <span className='bi bi-patch-check'></span>
                                    </div>
                                    <div className='r1'>
                                        <p>4/5</p>
                                        <div className='stars'>
                                          <span className='bi bi-star-fill'></span>
                                          <span className='bi bi-star-fill'></span>
                                          <span className='bi bi-star-fill'></span>
                                          <span className='bi bi-star-fill'></span>
                                          <span className='bi bi-star-fill'></span>
                                        </div>
                                        <p>4 Customer review</p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='r2'>
                                <h6>Alex Thompson</h6>
                                <p>Software Engineer</p>
                            </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews