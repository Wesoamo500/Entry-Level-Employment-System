import React, {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Routes,Route, useLocation } from 'react-router-dom'
import {fetchJobs} from './actions/jobs'
import Home from './components/LandingPage/Home/Home'
import Login from './components/LandingPage/Forms/Login'
import Signup from './components/LandingPage/Forms/Signup'
import Navbar from './components/LandingPage/Navbar/Navbar'
import Usernav from './components/LandingPage/Navbar/Usernav'
import Job from './components/LandingPage/jobs/Job'
import { GoogleOAuthProvider } from '@react-oauth/google';
import Profile from './components/LandingPage/Profile/Profile'
import Applicant from './components/LandingPage/Applicants/Applicant'
import Internship from './components/LandingPage/Internship/Internship'
import InternshipApp from './components/LandingPage/Internship/InternshipApp'
import InternshipRegister from './components/LandingPage/Internship/internshipRegister'



const App = () => {
  const auth = useSelector((state)=>state.auth)

  

  const  {authData} = auth
  const [recruiter,setRecruiter] = useState("")
  const [id,setId] = useState("")
  const [email2,setEmail2] = useState("")
  const [apply1,setApply1] = useState(false)
  const [tog,setTog] = useState(false)
  const [user,setUser] =useState(JSON.parse(localStorage.getItem('profile')));
  const {pathname} = useLocation()
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchJobs())
  },[dispatch])
  return (
    <>  
      <GoogleOAuthProvider clientId='456038449813-4adb0oq692gjffm2phhn2bd3dg1q2bu5.apps.googleusercontent.com'>
        <div>
          <Navbar tog={tog} setTog={setTog}  user={user} pathname={pathname} setUser={setUser}/>
          {authData && <Usernav   user={authData.info?.companyname} pathname={pathname} tog={tog} setTog={setTog}/>}
          <Routes>
              <Route element={<Home/>} exact path='/'/>
              <Route element={<Login/>} exact path='/login'/>
              <Route element={<Signup/>} exact path='/signup'/>
              <Route element={<Job recruiter={recruiter} setRecruiter={setRecruiter} id={id} setId={setId} email2={email2} setEmail2={setEmail2} user_one={authData?.info?.companyname} apply1={apply1} setApply1={setApply1} setTog={setTog} user={authData} tog={tog}/>}  path='/jobs'/>
              <Route element={<Profile/>} exact path='/profile'/>
              <Route element={<Internship/>} exact path='/internsign'/>
              <Route element={<InternshipRegister/>} exact path='/internRegister'/>
              <Route element={<InternshipApp recruiter={recruiter} setRecruiter={setRecruiter} id={id} setId={setId} email2={email2} setEmail2={setEmail2} user_one={authData?.info?.companyname} apply1={apply1} setApply1={setApply1} setTog={setTog} user={authData} tog={tog}/>} exact path='/internships'/>
          </Routes>
        </div>
      </GoogleOAuthProvider>
    </>
   
  )
}

export default App
