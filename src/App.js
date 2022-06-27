import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './components/home/Home'
import Navigation from './components/navigation/Navigation'

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
