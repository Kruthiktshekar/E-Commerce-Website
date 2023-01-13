import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCart, delCart } from './Redux/action'





function Cart() {

    const [product, setProduct] = useState(undefined)
    const [empty,setEmpty]= useState(true)

    const smiley = "😃"
    const sadSmiley = "☹️"

    const dispatch = useDispatch()

    const state = useSelector(state => state.handleCart)
  
    useEffect(() => {
        if (state) {
            setProduct(state) 
        }    
    }, [state])

    useEffect(()=>{
        console.log(state)

        if(state.length!==0){
            setEmpty(false)
        }
        else{
            setEmpty(true)
        }
    },[state])
    

    const decreaseBtn = (item) => {
        dispatch(delCart(item))
    }

    const increaseBtn = (item) => {
        dispatch(addCart(item))
    }

        
    
    const ShowProduct = () => {
        return(
            <div>
             {
                product && product.map((item) => {
                    return (
                        <>
                            <div className='container d-flex flex-column bg-dark bg-opacity-10 my-4 rounded-3'>
                                <div className='row my-4' key={item.id}>
                                    <div className='col-md-4 mb-5 '>
                                        <img src={item.image} alt={item.title}
                                            height='200px' width='180px' />
                                    </div>
                                    <div className='col-md-4'>
                                        <h3>{item.title}</h3>
                                        <p className='lead fw-bold'>
                                            {item.qty} X {item.price} =
                                            ${item.qty * item.price}
                                        </p>
                                        <button className='btn btn-outline-dark me-4' onClick={() => decreaseBtn(item)}>
                                            <i className='fa fa-minus'></i>
                                        </button>
                                        <button className='btn btn-outline-dark me-4' onClick={() => increaseBtn(item)}>
                                            <i className='fa fa-plus'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
        )
    }

    const Empty = () => {
        return (
            <div className="container-fluid  mt-100">
                <div className="row">

                    <div className="col-md-12">

                        <div className="card">
                            <div className="card-body cart">
                                <div className="col-sm-12 empty-cart-cls text-center">
                                    <img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" className="img-fluid mb-4 mr-3" alt='Your Cart Is Empty...' />
                                    <h3><strong>Your Cart is Empty...{sadSmiley}</strong></h3>
                                    <h4>Add something to make me happy...{smiley}</h4>
                                    <Link to="/products" className="btn btn-primary cart-btn-transform m-3" data-abc="true">continue shopping</Link>
                              </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }


    return (
        <>
        <div>
           {
             empty ?  (<Empty/>): (<ShowProduct/>)
           }
        </div>
        </>
    )

}

export default Cart