import React, { useState } from 'react';
import {
    Link
} from 'react-router-dom';
import swal from '@sweetalert/with-react';

export default function Login() {
    const [inputs, setInputs] = useState();

    const handleChange = (e) => {
        e.persist();
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/api/users/signin', {
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
                    swal('LOGIN SUCCESS', json.message, 'success')
                }
                else {
                    swal('ERROR', json.message, 'warning')
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="container">
            <div className="row">
                <form className="col s12" onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='input-field col s6 offset-s3'>
                            <input id="email" type="text" name='email' onChange={handleChange} />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col s6 offset-s3'>
                            <input id="password" type="password" name='password' onChange={handleChange} />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className='row' >
                        <button className='btn waves-effect col s3 offset-s3 red lighten-1' >Login</button>
                        <Link className='btn col s3 light-blue' to='/signup'>Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}