import './App.scss';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { useEffect } from 'react';
import PrivateRoute from './route/PrivateRoute';

function App() {
  //로그인 상태구분(처음엔 로그인 안된상태)
  const [authensticate, setAuthensticate] = useState(false)

  useEffect(() => {
    console.log('로그인의 상태', authensticate)
  }, [authensticate])
  return (
    <>
      <Navbar authensticate={authensticate} setAuthensticate={setAuthensticate} />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='login' element={<Login setAuthensticate={setAuthensticate} />} />
        <Route path='product/:id' element={<PrivateRoute authensticate={authensticate} />} />
        <Route />
      </Routes>
    </>
  )
}

export default App;
