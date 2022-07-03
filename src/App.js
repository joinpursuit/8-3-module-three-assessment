import { Routes, Route  } from "react-router-dom";
import React from "react";
import Home from "./Component/Home";
import Movie from "./Component/Movie";
import People from "./Component/People";
import Locations from "./Component/Locations";
import Navbar from "./Component/Navbar";
import "./App.css";
import Test from "./Component/Test";
// import logo from './logo.svg';


function App() {
  return (
  <div className="app">
      
       
            <Navbar />
             <Routes>
               <Route path='/' element={ < Test />} />
               {/* <Route path='/movie' element={< Movie />} />
               <Route path='/people' element={<People />} />
               <Route path='/locations' element={<Locations />}/> */}
      
           </Routes> 
        
      
  </div>
  
  );
}

export default App;