import React, { useEffect, useState } from 'react';
import {
    useParams
} from 'react-router-dom'
import UserProfile from './UserProfile';

export default function UserDashboard() {
    let { id } = useParams();
    const [user, setUser] = useState();
    useEffect(() => {
        const getUserData = async () => {
            const response = await fetch(`http://localhost:8080/api/users/${id}`)
            const data = await response.json();
            setUser(data);
        }
        getUserData();

    }, [id]);
    return (
        <div className='container'>

            {user && <div>
                <h1 className='center'>Welcome {`${user.firstName} ${user.lastName}`} </h1>
                <UserProfile user={user}/>
            </div>
            }
        </div>
    )
}
