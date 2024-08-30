import React from 'react'
import './App.css'
import Programs from './routes/Programs'
import About from './routes/About'
import Community from './routes/Community'
import Services from './routes/Services'
import { Routes,Route } from 'react-router-dom';
import Home from './routes/Home'

const App = () => {
  return (
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/programs' element={<Programs/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/community' element={<Community/>}/>
    </Routes>
      
  )
}

export default App