import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
//import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
//import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
//import Categories from './pages/Categories'
import Footer from './components/Footer'
import FetchData from './components/FetchData'


const App = () => {
  return (
    <>

    <Navbar/>

    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/general' element={<FetchData cat={'general'}/>} />
      <Route path='/business' element={<FetchData cat={'business'}/>} />
      <Route path='/entertainment' element={<FetchData cat={'entertainment'}/>} />
      <Route path='/health' element={<FetchData cat={'health'}/>} />
      <Route path='/science' element={<FetchData cat={'general'}/>} />
      <Route path='/sports' element={<FetchData cat={'sports'}/>} />
      <Route path='/technology' element={<FetchData cat={'technology'}/>} />

    </Routes>

    <Footer/>
    
    </>
    
  )
}

export default App
