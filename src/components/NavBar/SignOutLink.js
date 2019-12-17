import React from 'react';
import {
    Link
} from 'react-router-dom';

export default function SignOutLink() {
    return (
        <span>
            <li><Link to="/login">Login</Link></li>
        </span>
    );
}