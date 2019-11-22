import React, { useState } from 'react';
import NavBar from './components/NavBar'
import CryptoGrid from './components/CryptoGrid'
import CryptoList from './components/CryptoList'
import './App.css';

function App() {

  const [view, setView] = useState('grid')

  return (
    <div>
      <NavBar />
      {view === 'grid' ? (<CryptoGrid />) : (<CryptoList />) }
      
    </div>
  );
}

export default App;
