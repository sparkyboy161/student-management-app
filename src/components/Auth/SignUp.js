import React from 'react';

export default function SignUp() {
    return (
        <div className="container">
            <div className="row">
                <form className="col s12">
                    <div className='row'>
                        <div className='input-field col s6'>
                            <input id="first_name" type="text" className="validate" name='firstName' />
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate" name='lastName' />
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col s6 offset-s3'>
                            <input id="email" type="text" className="validate" name='email' />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col s6 offset-s3'>
                            <input id="password" type="text" className="validate" name='password' />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className='row center'>
                        <div className='col s12'>
                            <button className="btn red lighten-1">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}