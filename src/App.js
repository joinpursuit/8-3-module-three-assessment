import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Movies from './Components/Movies';
import People from './Components/People';
import Locations from './Components/Locations';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/people' element={<People />} />
        <Route path='/locations' element={<Locations />} />
      </Routes>
    </div>
  );
}

export default App;

