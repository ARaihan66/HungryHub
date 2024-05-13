import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'
import Error from './pages/Error'
import  Login  from './pages/Login'
import  SignUp  from './pages/SingUp'
import ForgotPassword from './pages/ForgotPassword'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/success' element={<Success/>}/>
      <Route path='*' element={<Error/>}/>
      <Route path='/sign-in' element={<Login/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/forgot-password"element={<ForgotPassword/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
