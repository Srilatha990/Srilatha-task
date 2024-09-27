import React from 'react'

function Navbar() {
  return (
    <div className='nav-sec mt-3'>
        <div className='container'>
            <div className='row'>
                <div className='col-6 nav1'>
                   <span className='bi bi-grid-fill'></span>
                   <p>Categories</p> 
                   <span className='bi bi-chevron-down'></span>
                </div>
                <div className='col-6 nav2'>
                    <a>Home</a>
                    <a>Products</a>
                    <a>Shops</a>
                    <a>Campaigns</a>
                    <a>Contact</a>
                    <a>About</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar