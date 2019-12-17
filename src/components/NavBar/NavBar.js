import React from 'react';
import {
    Link
} from 'react-router-dom';

import SignOutLink from './SignOutLink';
import SignInLink from './SignInLink';

export default function NavBar() {
    let isLogin = localStorage.getItem('isLogin');
    console.log(isLogin);
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo center">Student Management</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/courses">Courses List</Link></li>
                        <li><Link to="/courses/create">Create Course</Link></li>
                        {
                            isLogin ? <SignInLink/> : <SignOutLink/>
                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}
