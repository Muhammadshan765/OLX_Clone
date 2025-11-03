import React from 'react'
import Home from './Components/Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Details from './Components/Details/Details'
import Card from './Components/Card/Card'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
   
    <>
      
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='/details' element={<Details/>} />
        
        
      </Routes>
      
    </>
  )
}

export default App