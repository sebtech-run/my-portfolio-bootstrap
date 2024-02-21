import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Index from './pages/index';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App">

    <Router>
    <Routes>
    <Route path='/' element={<Index />} />
    </Routes>
    </Router>
   

     
    </div>
  );
}

export default App;
