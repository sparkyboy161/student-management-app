import React, { useState, useEffect } from 'react';
import CourseSummary from './CourseSummary';
export default function CoursesList() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourse = async () => {
            const response = await fetch(`http://localhost:8080/api/courses/`);
            const data = await response.json();
            setCourses(data);
        }
        fetchCourse();
    }, []);

    return (
        <div className='container'>
            <h1 className='center'>Courses List</h1>
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
    )
}