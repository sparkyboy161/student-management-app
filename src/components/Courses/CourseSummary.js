import React from 'react';
import {
    Link
} from 'react-router-dom'

export default function CourseSummary({ course }) {
    return (
        <tr>
            <td>{course.name}</td>
            <td>{course.teacher}</td>
            <td>{course.location}</td>
            <td>{course.duration}</td>
            <td>
                <Link to={`/courses/${course._id}`}>Details</Link>
            </td>
            <td>
                <Link to='/'>Register</Link>
            </td>
        </tr>
    );
}