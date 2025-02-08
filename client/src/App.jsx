import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Signup from './pages/Signup';
import Signin from './pages/Signin';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={< Signin /> } />
        <Route path='/sign-up' element={ < Signup /> } />
        <Route path='/sign-in' element={ < Signin /> } />

        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
