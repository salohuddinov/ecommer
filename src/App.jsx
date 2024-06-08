import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Link } from 'react-router-dom'
import Home from './pages/home/Home'
import Single from './pages/single/Single'
import Header from './components/header/Header'
import Wishlist from './pages/wishlist/Wishlist'
import Cart from './pages/cart/Cart'
import Admin from './pages/admin/Admin'
import Footer from './components/footer/Footer'
import not from './images/not.png'
import Catalog from './pages/catalog/Catalog'
import Blog from './pages/blog/Blog'
import Contact from './pages/contact/Contact'
import Garant from './pages/garant/Garant'
import Возврат from './pages/возврат/Возврат'
import Dostafka from './pages/dostafka/Dostafka'
import Compan from './pages/compan/Compan'
import Allproduct from './pages/allproduct/Allproduct'
import Login from './pages/login/Login'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/garant" element={<Garant />} />
        <Route path="/возврат" element={<Возврат />} />
        <Route path="/dostafka" element={<Dostafka />} />
        <Route path="/compan" element={<Compan />} />
        <Route path="/allproduct" element={<Allproduct />} />
        <Route path='*'
          element={<div className='container'>
            <img className='notempty container' src={not} alt="404 not found this page" />
            <p className='notempty__p'>Похоже, ничего не нашлось :(</p>
            <Link className='notempty__button container' to={"/"}>На главную</Link>
          </div>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
