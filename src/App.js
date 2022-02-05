import './App.css';
import Login from './pages/login/Login';
import User from './pages/User/User';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUp from './pages/signup/SignUp';
import Course from './pages/courses/Course';
import Profile from './pages/profile/Profile'
import Overview from './pages/overview/Overview';


function App() {
  return (

    <>


      <Router>


        <Routes>

        <Route path ='/' element ={<Login />} />

        <Route path ='user' element ={<User />} />

        <Route path ='signup' element ={<SignUp />} />

        <Route path ='course' element ={<Course />} />

        <Route path ='profile' element ={<Profile />} />

        <Route path ='overview' element ={<Overview />} />

        


        </Routes>

      </Router>




    </>

  );
}

export default App;
