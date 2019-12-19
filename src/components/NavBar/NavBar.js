import React, { useContext } from 'react';
import {
    Link
} from 'react-router-dom';

import SignOutLink from './SignOutLink';
import SignInLink from './SignInLink';
import Cart from './Cart';
import { AuthContext } from '../../context/AuthContext';


export default function NavBar() {
    // eslint-disable-next-line
    const [loginId, setLoginId] = useContext(AuthContext);
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo center">Student Management</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <Cart />
                        <li><Link to="/courses">Courses List</Link></li>
                        <li><Link to="/courses/create">Create Course</Link></li>
                        {
                            (loginId !== 0) ? <SignInLink /> : < SignOutLink />
                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}
