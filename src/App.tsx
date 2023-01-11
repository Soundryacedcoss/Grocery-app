import React, { createContext, useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import './App.css';
import { Cart } from './Components/Cart';
import { Login } from './Components/Login';
import { Navbar } from './Components/Navbar';
import Signup from './Components/Signup';

export const cartContext = createContext({})
// RouterProvider
let router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Navbar />} />
      <Route path='/signIn' element={<Signup />} />
      <Route path='/Cart' element={<Cart />} />
      <Route path='/Login' element={<Login />} />
    </>
  )
)

function App() {
  const [cart, setCart] = useState([]) as any
  return <cartContext.Provider value={{ cart, setCart }}><RouterProvider router={router} /></cartContext.Provider>
}

export default App;
