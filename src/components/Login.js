import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div>

            <h2 className='d-flex justify-content-center my-4 fw-bold'>Log In to Continue..</h2>
            <form className='my-5  d-flex flex-column justify-content-center align-items-center'>
                <div class="row mb-3" style={{width:'40%'}}>
                    <label for="inputEmail3" class="col-sm-2 col-form-label ">Email</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div class="row mb-3" style={{width:'40%'}}>
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control " id="inputPassword3" />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Log In</button>
                <span className='my-2'>Don't Have An Account? <Link to='/register'>Register</Link></span>
            </form>
        </div>
    )
}

export default Login