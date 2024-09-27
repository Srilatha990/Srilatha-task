import React from 'react'

function Header() {
  return (
    <div className='header-sec'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    <img src='../../images/logo.png' className='logo' />
                </div>
                <div className='col-md-4'>
                    <div className='input-box'>
                        <p className='para'>Search ...</p>
                        <button className='bi bi-search'></button>
                    </div>
                </div>
                <div className='col-md-5 info'>
                    <button>
                        <span className='bi bi-currency-dollar'></span>
                    </button>
                    <button>
                        <span className='bi bi-moon'></span>
                    </button>
                    <div className='detail'>
                    <button>
                        <span className='bi bi-heart'></span>
                    </button>
                    <div>
                        <p>Wishlist</p>
                        <p>0 Item</p>
                    </div>
                    </div>
                    <div className='detail'>
                    <button>
                        <span className='bi bi-repeat'></span>
                    </button>
                    <div>
                        <p>Compare</p>
                        <p>0 Item</p>
                    </div>
                    </div>
                    <div className='detail'>
                    <button>
                        <span className='bi bi-handbag'></span>
                    </button>
                    <div>
                        <p>Cart(0)</p>
                        <p>$0.0</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Header