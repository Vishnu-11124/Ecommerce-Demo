import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/collection'
import About from './pages/about'
import Contact from './pages/contact'
import Product from './pages/Product'
import Cart from './pages/cart'
import Login from './pages/login'
import PlaceOrder from './pages/placeOrder'
import Orders from './pages/orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/placeOrder' element={<PlaceOrder/>} />
        <Route path='/orders' element={<Orders/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
