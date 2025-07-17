import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AllStudents from './pages/AllStudents';
import Profile from './pages/Profile';
import PayFees from './pages/PayFees';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<AllStudents />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/pay" element={<PayFees />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
