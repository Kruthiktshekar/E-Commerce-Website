import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from 'react-router-dom'

function Products() {

    const [data, setData] = useState([])
    const [filter,setFilter] = useState(data)
    const [isLoading, setIsLoading] = useState(false)
    let mounted = true

    useEffect(() => {
        const getProducts = async () => {
            setIsLoading(true)
            const response = await fetch("https://fakestoreapi.com/products")
            if (mounted) {
                setData(await response.clone().json())
                setFilter(await response.json())
                setIsLoading(false)
            }

            return () => {
                // eslint-disable-next-line
                mounted = false
            }
        }
        getProducts()
    }, [])

    const Loading = () => {
        return (
            <>
                <div className='col-md-3'>
                    <Skeleton height={350}/>
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350}/>
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350}/>
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350}/>
                </div>
            </>
        )
    }

    const filterProduct = (cat) => {
        const updatedList = data.filter((item)=>
            item.category === cat)
            setFilter(updatedList)
    }

    const ShowProducts = () => {
        return (
            <>
                <div className='button d-flex justify-content-center mb-5 pb-5'>
                    <div className='btn btn-outline-dark me-2' onClick={()=>setFilter(data)}>All</div>
                    <div className='btn btn-outline-dark me-2'onClick={()=>filterProduct("men's clothing")}>Men's Clothing</div>
                    <div className='btn btn-outline-dark me-2' onClick={()=>filterProduct("women's clothing")}>women's Clothing</div>
                    <div className='btn btn-outline-dark me-2' onClick={()=>filterProduct("jewelery")}>Jewelery</div>
                    <div className='btn btn-outline-dark me-2' onClick={()=>filterProduct("electronics")}>Electronics</div>
                </div>
                {filter.map((items,id) => {
                    return (
                        <>
                            <div className='col-md-3 mb-4' >
                                <div className="card h-100 text-center p-4" key={id}>
                                    <img src={items.image} className="card-img-top" alt={items.title} height='250px'/>
                                        <div className="card-body" >
                                            <h5 className="card-title mb-0">{items.title.substring(0,12)}...</h5>
                                            <p className="card-text lead fw-bold">
                                                ${items.price}
                                            </p>
                                            <NavLink to={`/products/${items.id}`} className="btn btn-primary">Buy Now</NavLink>
                                        </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }

    return (
        <div>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-12 mb-5 '>
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {isLoading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Products