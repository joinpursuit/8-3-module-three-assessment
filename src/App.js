import { Routes, Route  } from "react-router-dom";
import Home from './Component/Home';
import Movie from './Component/Movie';
import People from './Component/People';
import Locations from './Component/Locations';
import Navbar from './Component/Navbar';
import './App.css';


function App() {
  return (
    <div className="app">
 <main>  
          <Navbar />
          <Routes>
               <Route path='/' element={< Home />} />
               <Route path='/movie' element={< Movie />} />
               <Route path='/people' element={<People />} />
               <Route path='/locations' element={<Locations />} />
      
           </Routes>
        </main>       </div>
  );
}

export default App;