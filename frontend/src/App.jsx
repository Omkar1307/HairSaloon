

import './App.css'
import Navbar from './components/navbar'
import About from './components/About'
import Home from './components/Home'
import { Route,Routes } from 'react-router-dom'
import Contacts from './components/Contacts'
import Service from './components/Service'
import Footer from './components/Footer'
import Login from './Pages/Login'
import Register from './Pages/Register'
import EmailOtpVerification from './components/EmailOtpVerification'
import CreateNewPasswod from './components/CreateNewPasswod'
import LandingPage from './Pages/LandingPage'
function App() {
 
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/contacts' element={<Contacts/>} />
      <Route path='/Service' element={<Service/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/EmailOtpVerification' element={<EmailOtpVerification/>}/>
      <Route path='/reset-password' element={<CreateNewPasswod/>}/>
      <Route path='/forgotPassword' element={<EmailOtpVerification purpose="forgot" />}/>
      <Route path='/landing' element={<LandingPage/>}/> 
    </Routes>
    
   <Footer/>
  </>
  )


}

export default App
