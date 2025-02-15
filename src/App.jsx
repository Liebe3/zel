import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserName from './components/UserName';
import LetterForZel from './components/LetterForZel';
import Flower from './components/Flower';
import VirtualHug from './components/VirtualHug';

function App() {
  return (
    // Add basename here to match the GitHub Pages deployment path
    <Router>
      <Routes>
        <Route path="/" element={<UserName />} />
        <Route path="/letter" element={<LetterForZel />} />
        <Route path="/flowers" element={<Flower />} />
        <Route path="/hug" element={<VirtualHug/>}/>
      </Routes>
    </Router>
  );
}

export default App;
