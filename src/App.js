// import logo from './logo.png'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Components/Home'

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <img src={logo} alt={'logo pic'} /> */}
      </Routes>
    </div>
  )
}

export default App
