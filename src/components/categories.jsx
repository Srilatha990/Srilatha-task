import React from 'react'

function Categories() {
  return (
    <div className='category-sec'>
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-lg-6 col-md-12 col-sm-12 category-content'>
                <h1>Top Categories</h1>
                <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                </div>
                <div className='col-6 cat-btn'>
                    <a className='css-11kqyjn'>View More</a>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-lg-2 col-md-4 col-sm-4 col-4'>
                    <div className='cat1'>
                    <div class="circle">
                       <img src="../../images/cat1.webp" alt="Profile" />
                    </div>
                    <h6>Eye wear</h6>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-4 col-4'>
                    <div className='cat1'>
                    <div class="circle">
                       <img src="../../images/cat2.webp" alt="Profile" />
                    </div>
                    <h6>Shirts</h6>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-4 col-4'>
                    <div className='cat1'>
                    <div class="circle">
                       <img src="../../images/cat3.webp" alt="Profile" />
                    </div>
                    <h6>Pants</h6>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-4 col-4'>
                    <div className='cat1'>
                    <div class="circle">
                       <img src="../../images/cat4.webp" alt="Profile" />
                    </div>
                    <h6>Shoes</h6>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-4 col-4'>
                    <div className='cat1'>
                    <div class="circle">
                       <img src="../../images/cat5.webp" alt="Profile" />
                    </div>
                    <h6>Caps</h6>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-4 col-4'>
                    <div className='cat1'>
                    <div class="circle">
                       <img src="../../images/cat6.webp" alt="Profile" />
                    </div>
                    <h6>Mobile</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories