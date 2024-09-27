

import React from 'react'

function Featuredproducts() {
  return (
    <div className='best-sec'>
        <div className='container'>
            <div className='row best-cont'>
                <div className='col-lg-6 col-sm-12 best-content'>
                <h1>Featured Products</h1>
                <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                </div>
                <div className='col-6 best-btn'>
                    <a className='css-11kqyjn'>View More</a>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-lg-3 col-sm-6 col-6 f1'>
                    <div className="card">
                    <img src="../../images/f1.webp"  alt="..." className='card-img-top'/>
                    <div className="card-body">
                      <a className="card-title">LV Trainer </a>
                      <p className="card-text"><span className='bi bi-star'></span>(5.0)</p>
                      <p className='cost'>$ 247.0<span className='red'>(-1%)</span></p>
                    </div>
                    </div>
                </div>
                <div className='col-lg-3 col-sm-6 col-6 f2'>
                    <div className="card">
                    <img src="../../images/f2.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <a className="card-title">NBA LOS </a>
                      <p className="card-text"><span className='bi bi-star'></span>(0)</p>
                      <p className='cost'>$ 58.0<span className='red'>(-3%)</span></p>
                    </div>
                    </div>
                </div>
                <div className='col-3 f3'>
                    <div className="card">
                    <img src="../../images/f3.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <a className="card-title">NIKE A</a>
                      <p className="card-text"><span className='bi bi-star'></span>(0)</p>
                      <p className='cost'>$ 257.0 <span className='red'>(-1%)</span></p>
                    </div>
                    </div>
                </div>
                <div className='col-3 f4'>
                    <div className="card">
                    <img src="../../images/f4.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <a className="card-title">Gucci White </a>
                      <p className="card-text"><span className='bi bi-star'></span>(0)</p>
                      <p className='cost'>$ 98.0 <span className='red'>(-18%)</span></p>
                    </div>
                    </div>
                </div>
            </div>
            <div className='row view'>
              <a>View More <span className='bi bi-chevron-right'></span></a>
            </div>
            
        </div>

    </div>
  )
}

export default Featuredproducts