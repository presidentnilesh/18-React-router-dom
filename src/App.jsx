import React from 'react'
import {Route , Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Product_Page from './pages/Product_Page'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/About' element={<About />} /> 
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Product_Page' element={<Product_Page />} />

      </Routes>
    </div>
  )
}

export default App  