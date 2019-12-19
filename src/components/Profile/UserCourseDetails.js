import React, { useState, useEffect ,useContext} from 'react';
import { LoadingContext } from '../../context/LoadingContext';


export default function UserCourseDetails({ subjectID }) {
    const [subject, setSubject] = useState({ name: '', teacher: '', location: '' });
    const [loadingState,setLoadingState] = useContext(LoadingContext);
    
    useEffect(() => {
        const fetchCourse = async () => {
            setLoadingState(true);
            const response = await fetch(`http://localhost:8080/api/courses/${subjectID}`);
            const data = await response.json();
            setSubject(data);
            setLoadingState(false);
        }
        fetchCourse();
    }, []);
    return (
        <tr>
            
            <td>{subject.name}</td>
            <td>{subject.teacher}</td>
            <td>{subject.location}</td>
            <td>{subject.duration}</td>
        </tr>
    )
}
