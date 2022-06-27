import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Routings from './components/Routings';
// import Home from './components/Home';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <main>
        <Routings />
      </main>
    </div>
  );
}

export default App;
