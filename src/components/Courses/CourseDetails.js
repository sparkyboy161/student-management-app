import React, { useEffect, useState } from 'react';
import {
    useParams,
    Link
} from 'react-router-dom';
export default function CourseDetails() {
    const [course, setCourse] = useState();
    let { id } = useParams();
    useEffect(() => {
        const fetchCourse = async () => {
            const response = await fetch(`http://localhost:8080/api/courses/${id}`);
            const data = await response.json();
            setCourse(data);
        }
        fetchCourse();
    }, [id]);


    return (
        <div>
            <h1 className='center'>Details</h1>
            {
                course &&
                <div className="row">
                    <div className="col s12 m12">
                        <div className="card deep-purple large">
                            <div className="card-content white-text">
                                <h3 className='white-text'>Course: {course.name}</h3>
                                <span className='card-title'>Teacher: {course.teacher}</span>
                                <span className='card-content'>Description</span>
                                <blockquote>
                                    {course.description}
                                </blockquote>
                                <span className='card-content'>Current Register</span>
                                <blockquote>
                                    {course.currentRegister}
                                </blockquote>
                                <span className='card-content'>Maximum Register</span>
                                <blockquote>
                                    {course.maximumRegister}
                                </blockquote>
                            </div>
                            <div className="card-action center">
                                <Link to="/" className='white-text'>Register</Link>
                                <Link to="/courses" className='white-text'>Cancel</Link>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}