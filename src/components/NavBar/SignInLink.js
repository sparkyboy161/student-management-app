import React, { useContext } from 'react';
import {
    Link
} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import swal from '@sweetalert/with-react';

export default function SignInLink() {
    // eslint-disable-next-line
    const [loginId, setLoginId] = useContext(AuthContext); 

    const handleClick = () => {
        setLoginId(0);
        swal('SIGN OUT SUCCESS', 'RETURN TO HOMEPAGE', 'warning');
    }
    return (
        <span >
            <li><Link to={`/users/${loginId}`} >My profile</Link></li>
            <li><Link to="/" onClick={handleClick}>Log Out</Link></li>
            
        </span>
    );
}