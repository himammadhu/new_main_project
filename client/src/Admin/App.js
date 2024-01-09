import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Department from './Pages/Department'
import Home from './Components/Home'
import District from './Pages/District'
const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Department' element={<Department/>} />
        <Route path='/District' element={<District/>} />
    </Routes>
  )
}

export default App