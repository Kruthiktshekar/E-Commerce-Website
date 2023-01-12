import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div >
            <h2 className='d-flex justify-content-center my-4 fw-bold'>SIGN IN</h2>
            <form class="row g-3 d-flex   my-5 ms-5 fw-bold " style={{width:'70%'}}>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputPassword4" />
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Address 2</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select">
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
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="inputZip" />
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                        <label class="form-check-label fw-semibold" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
                <span className='fw-normal'>Already Have An Account? <Link to='/login'>Login</Link></span>
            </form>
        </div>
    )
}

export default Register