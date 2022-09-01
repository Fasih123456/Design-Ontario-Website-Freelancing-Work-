import React from 'react';

import { BrowserRouter, Route, Routes, Navigate, Link } from 'react-router-dom';
import Work from './Work';
import Contact from './Contact';
import costCalculations from './costCalculations';
import Main from '../Components/Main';
import Login from '../Components/Login';
import Signup from '../Components/Signup'
import Home from './Home';


const App = () => {
  const user = localStorage.getItem("token")
    return(
        <div className='ui container'>

            <Routes>
              {user && <Route path="/" excat element={<Main />} />}
              <Route path="/signup" excat element={<Signup />} />
              <Route path="/login" excat element={<Login />} />
              <Route path="/" excat element={<Home />} />
              <Route path="/work" excat element={<Work />} />
              <Route path="/contact" excat element={<Contact />} />
              <Route path="/cost" excat element={<costCalculations />} />
            </Routes>
        </div>
    );
};

export default App;