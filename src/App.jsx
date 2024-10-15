import React from 'react'
import './App.css'
import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Components/Homepage.jsx'
import LogIn from './Components/LogIn.jsx'
import SignIn from './Components/SignIn.jsx'
import StartProject from './Components/StartProject.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route  path='/startproject' element={<StartProject />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
