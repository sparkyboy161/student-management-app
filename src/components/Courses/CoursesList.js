import React, { useState, useEffect, useContext } from 'react';
import CourseSummary from './CourseSummary';
import { CartContext } from '../../context/CartContext';
import swal from '@sweetalert/with-react';
import { AuthContext } from '../../context/AuthContext';

export default function CoursesList() {
    const [courses, setCourses] = useState([]);
    // eslint-disable-next-line
    const [carts, setCarts] = useContext(CartContext);
    // eslint-disable-next-line
    const [loginId, setLoginId] = useContext(AuthContext);

    useEffect(() => {
        const fetchCourse = async () => {
            const response = await fetch(`http://localhost:8080/api/courses/`);
            const data = await response.json();
            setCourses(data);
        }
        fetchCourse();
    }, []);

    const handleClick = () => {
        const idCarts = carts.map(cart=>cart._id);
        if (loginId !== 0) {
            fetch(`http://localhost:8080/api/users/${loginId}/register`, {
                method: 'post',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(idCarts)
            })
                .then(res => {
                    return res.json();
                })
                .then(json => {
                    console.log(json);
                    if (json.success) {
                        swal('REGISTER SUCCESS', json.message, 'success');
                        setCarts([]);
                    }
                    else {
                        swal('ERROR', json.message, 'warning')
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
        else {
            swal('ERROR', 'You need to login before registering', 'warning')
        }
    }


    return (
        <div className='container'>
            <h1 className='center'>Courses List</h1>
            <div className='row'>
                <table className="striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Teacher</th>
                            <th>Location</th>
                            <th>Duration</th>
                            <th>Register</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.length && courses.map(course => <CourseSummary course={course} key={course._id} />)}
                    </tbody>
                </table>
            </div>
            <div className='row'>
                <button className='btn col s3 offset-s4' onClick={handleClick}>Register</button>
            </div>
        </div>
    )
}