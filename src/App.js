import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import CoursesList from './components/Courses/CoursesList';
import CourseDetails from './components/Courses/CourseDetails';
import CreateCourse from './components/Courses/CreateCourse';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Homepage from './pages/Homepage';
import UserDashboard from './components/Profile/UserDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>

      <Switch>
        <Route exact path='/'>
          <Homepage/>
        </Route>
        <Route exact path='/login'>
          <Login/>
        </Route>
        <Route exact path='/signup'>
          <SignUp/>
        </Route>
        <Route exact path='/courses'>
          <CoursesList/>
        </Route>
        <Route exact path='/courses/create'>
          <CreateCourse/>
        </Route>
        <Route path='/users/:id'>
          <UserDashboard/>
        </Route>
        <Route path='/courses/:id'>
          <CourseDetails/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
