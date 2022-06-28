import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './components/home/Home'
import Navigation from './components/navigation/Navigation'
import Shop from './components/shop/Shop'
import Contact from './components/contact/Contact'
import SignIn from './components/signIn/SignIn'
import Cart from './components/cart/Cart'

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
