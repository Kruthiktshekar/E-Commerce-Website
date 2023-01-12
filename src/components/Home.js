import React from 'react'
import Products from './Products'

function Home() {
    return (
        <div className='hero'>
            <div className="card bg-dark text-dark border-0">
                <img src="/Assets/shoping-template.jpg" className="card-img" alt="Background" height='700px' />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className='container'>
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SALES ARRIVALS</h5>
                        <p className="card-text lead fs-2">Check Out All The Trends Now....</p>
                    </div>
                </div>
            </div>
            <Products/>
        </div>
    )
}

export default Home