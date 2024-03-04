import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Index from './pages/index';
import PagePortfolio from './pages/pagePortfolio';
import Contact from './pages/contact';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App">

    <Router>
    <Routes>
    <Route path='/' element={<Index />} />
    <Route path='/portfolio' element={<PagePortfolio />} />
    <Route path='/contact' element={<Contact />} />
    </Routes>
    </Router>
   

     
    </div>
  );
}

export default App;
