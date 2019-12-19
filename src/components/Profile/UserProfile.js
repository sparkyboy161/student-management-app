import React, { useContext } from 'react';
import UserCourseDetails from './UserCourseDetails';
import Loader from 'react-loader-spinner';
import { LoadingContext } from '../../context/LoadingContext';

export default function UserProfile({ user }) {
    const [loadingState, setLoadingState] = useContext(LoadingContext);
    const registeredSubjects = user.registeredSubjects;
    return (
        <div className='container'>
            {
                (loadingState)
                    ? <div className="center">
                        <Loader
                            type="Puff"
                            color="#00BFFF"
                            height={100}
                            width={100}
                        />
                    </div>
                    : ''
            }
            <div className="divider"></div>
            <div className="section">
                <h5>Email: {user.email}</h5>
            </div>
            <div className="divider"></div>
            <div className="section">
                <h5 className='center'>Registered Subject</h5>
                <table className="striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Teacher</th>
                            <th>Location</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            registeredSubjects.length && registeredSubjects.map((subjectID, index) =>
                                <UserCourseDetails key={index} subjectID={subjectID} />
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div className="divider"></div>
        </div>
    )
}
