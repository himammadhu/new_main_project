import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Department from './Pages/Department'
import Home from './Components/Home'
const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Department' element={<Department/>} />
    </Routes>
  )
}

export default App