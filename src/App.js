import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Movies from './Components/Movies'
import People from './Components/People'
import Location from './Components/Location'

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='/movies' element={<Movies />} />
        <Route path='/people' element={<People />} />
        <Route path='/location' element={<Location />} />
      </Routes>
    </div>
  )
}

export default App
