import React, { useContext } from 'react';
import {
    Link
} from 'react-router-dom'
import { CartContext } from '../../context/CartContext';


export default function CourseSummary({ course }) {
    const [carts, setCarts] = useContext(CartContext);
    let newCart = carts.filter(cart => cart._id === course._id);
    let totalSelectedCourses = newCart.length;
    const addToCart = () => {
        setCarts(curr => [
            ...curr,
            course
        ])
        console.log(carts);
    }

    const removeFromCart = () => {
        let id = course._id;
        console.log(id);
        let index = newCart.map(c=>c.name).indexOf(course.name); 
        setCarts(
            
        )
    }

    return (
        <tr>
            <Link to={`/courses/${course._id}`}><td>{course.name}</td></Link>
            <td>{course.teacher}</td>
            <td>{course.location}</td>
            <td>{course.duration}</td>
            <td>
                <button className='btn waves-effect waves-light' onClick={addToCart}>Register</button>
                <button className='btn waves-effect waves-light' onClick={removeFromCart}>Cancel</button>
            </td>
            <td>{totalSelectedCourses}</td>
        </tr>
    );
}