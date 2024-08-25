import React from 'react'
import './App.css'
import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Components/Homepage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
