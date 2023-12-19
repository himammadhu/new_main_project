import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './Admin/App'
const App = () => {
  return (
   <Routes>
    <Route path='/Admin/*' element={<Admin/>} />
   </Routes>
  )
}

export default App