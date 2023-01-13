import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div className='d-flex  flex-column justify-content-center align-items-center'>      
            <h2 className=' fw-bold mt-4'>SIGN IN</h2> 
            <form className="row g-3 my-2 fw-bold " style={{width:'70%'}}>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="col-12">
                    <label for="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="col-md-6">
                    <label for="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                    <label for="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option>Karnataka</option>
                        <option>Tamil Nadu</option>
                        <option>Kerala</option>
                        <option>Andra Pradesh</option>
                        <option>Telangana</option>
                        <option>Goa</option>
                        <option>Maharashtra</option>
                        <option>Delhi</option>
                        <option>Rajasthan</option>
                        <option>Gujarat</option>
                        <option>Uttar Pradesh</option>
                        <option>Jammu</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label for="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label fw-semibold" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
                <span className='fw-normal'>Already Have An Account? <Link to='/login'>Login</Link></span>
            </form>
        </div>
    )
}

export default Register