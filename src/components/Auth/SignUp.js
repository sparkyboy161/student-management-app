import React, { useState } from 'react';
import swal from '@sweetalert/with-react';

export default function SignUp() {
    const [inputs, setInputs] = useState();

    const handleChange = e => {
        e.persist();
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        fetch('http://localhost:8080/api/users/signup', {
            method: 'post',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputs)
        })
            .then(res => {
                return res.json();
            })
            .then(json => {
                if (json.success) {
                    swal('SIGNED SUCCESS', json.message, 'success');
                }
                else {
                    swal('ERROR', json.message, 'warning');
                }
            })
            .catch(err => {
                swal('ERROR', err, 'warning');
            })
    }

    return (
        <div className="container">
            <div className="row">
                <form className="col s12" onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='input-field col s6'>
                            <input id="first_name" type="text" className="validate" name='firstName' onChange={handleChange} />
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate" name='lastName' onChange={handleChange} />
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col s6 offset-s3'>
                            <input id="email" type="text" className="validate" name='email' onChange={handleChange} />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col s6 offset-s3'>
                            <input id="password" type="password" className="validate" name='password' onChange={handleChange} />
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