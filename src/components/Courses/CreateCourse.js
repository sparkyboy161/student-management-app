import React, { useState } from 'react';
import swal from '@sweetalert/with-react';

export default function CreateCourse() {
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
        fetch('http://localhost:8080/api/courses/create', {
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
                    swal('CREATE SUCCESS', json.message, 'success')
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
        <div className='container'>
            <h1 className='center'>Create Your Course</h1>
            <div className="row">
                <form className="col s12" onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='input-field col s6'>
                            <input id="name" type="text" className="validate" name='name' onChange={handleChange} />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="teacher" type="text" className="validate" name='teacher' onChange={handleChange} />
                            <label htmlFor="teacher">Teacher</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col s6 offset-s3'>
                            <input id="location" type="text" className="validate" name='location' onChange={handleChange} />
                            <label htmlFor="location">Location</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col s6 offset-s3'>
                            <textarea id="description" className="materialize-textarea" name='description' onChange={handleChange} />
                            <label htmlFor="description">Description</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col s6 offset-s3'>
                            <input id="duration" type="number" className="validate" name='duration' onChange={handleChange} />
                            <label htmlFor="duration">Duration</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col s6 offset-s3'>
                            <input id="maximumRegister" type="number" className="validate" name='maximumRegister' onChange={handleChange} />
                            <label htmlFor="maximumRegister">Maximum Registers</label>
                        </div>
                    </div>
                    <div className='row center'>
                        <div className='col s12'>
                            <button className="btn red lighten-1">Create</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}