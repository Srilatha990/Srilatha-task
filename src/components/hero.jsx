import React from 'react'

function Hero() {
  return (
    <div className='hero-sec'>
        <div className='container'>
          <div className='row mt-3'>
            <div className='col-lg-3'>
              <div className='box'>
                <div>
                    <a className='boxes'>
                    <div className='css-1x4jos1'>
                      <span className='css-18nn6qz'><img src='../../images/img1.png'/></span>
                      <p className='css-1rlmo8s'>Busy Mart</p>
                    </div>
                    </a>
                    <a className='boxes'>
                    <div className='css-1x4jos1'>
                      <span className='css-18nn6qz'><img src='../../images/img2.webp'/></span>
                      <p className='css-1rlmo8s'>Luxury Emporium</p>
                    </div>
                    </a>
                    <a className='boxes'>
                    <div className='css-1x4jos1'>
                      <span className='css-18nn6qz'><img src='../../images/img3.webp'/></span>
                      <p className='css-1rlmo8s'>Elite Boutique</p>
                    </div>
                    </a>
                    <a className='boxes'>
                    <div className='css-1x4jos1'>
                       <span className='css-18nn6qz'><img src='../../images/img4.webp'/></span>
                       <p className='css-1rlmo8s'>Tech & Trend</p>
                    </div>
                    </a>
                    <a className='boxes'>
                    <div className='css-1x4jos1'>
                      <span className='css-18nn6qz'><img src='../../images/img5.webp'/></span>
                      <p className='css-1rlmo8s'>Best Cart</p>
                    </div>
                    </a>
               </div>
               <button className='css-196b225'> View All <span className='bi bi-chevron-right'></span></button>
              </div>
            </div>

            <div className='col-lg-9 col-md-12 col-sm-12 banner '>
              <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              </div>
              <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="../../images/banner1.webp" className="d-block" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="../../images/baner2.webp" className="d-block" alt="..."/>
              </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
              </div>
            </div>
          </div>
          <div className=' row css-isbt42'>
            
            <div className='box-item col-lg-6 col-md-6 col-sm-12'>
                <div className='css-1yrx5i2'>
                    <img src='../../images/watch.webp'/>
                        <div className='css-ir9x2k'>
                            <h4 className='css-kw1lo'>Shop the latest from top brands</h4>
                            <p className='css-1tdjupk'>Fully Comforable and Smooth Product</p>
                            <div>
                                <a className='css-11kqyjn'>View Collection </a>
                            </div>
                        </div>
                </div>
            </div>
            <div className='box-item col-lg-6 col-md-6 col-sm-12'>
                <div className='css-1yrx5i2'>
                    <img src='../../images/shoe.webp'/>
                        <div className='css-ir9x2k'>
                            <h4 className='css-kw1lo'>Shop the latest from top brands</h4>
                            <p className='css-1tdjupk'>Fully Comforable and Smooth Product</p>
                            <div>
                                <a className='btn2'>View Collection </a>
                            </div>
                        </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero