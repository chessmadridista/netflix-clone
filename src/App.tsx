import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/login/Login'
import WhosWatching from './components/who\'s watching/Who\'sWatching'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/browse' element={<WhosWatching />} />
      </Routes>
    </>
  )
}

export default App
