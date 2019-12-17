import React from 'react';
import {
    Link
} from 'react-router-dom';

export default function SignInLink() {
    const handleClick = () =>{
        localStorage.setItem('isLogin',false);
    }
    return (
        <span >
            <li><Link to="/" onClick={handleClick}>Log Out</Link></li>
        </span>
    );
}