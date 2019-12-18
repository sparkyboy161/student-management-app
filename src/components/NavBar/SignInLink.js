import React from 'react';
import {
    Link
} from 'react-router-dom';

export default function SignInLink() {
    return (
        <span >
            <li><Link to="/" >Log Out</Link></li>
        </span>
    );
}