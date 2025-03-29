import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import NotFound from './pages/error/NotFound';
import Unauthorized from './pages/error/Unauthorized';

const App = () => {
  return (
    <div className='w-full max-w-4xl mx-auto'>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />

          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
