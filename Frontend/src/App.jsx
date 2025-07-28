import React from 'react'
import { useState } from 'react';
import Navbar from './Components/Navbar';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import Home from './Pages/Home';
import Explore from './Pages/Explore';


const router = createBrowserRouter(
[
  {
    path: "/",
    element: 
    <div>
    <Navbar/>
    <Home/>
    </div>
  },
  {
    path: "/Explore",
    element:
    <div>
    <Navbar/>
    <Explore/>
    </div>
  }
]

)

const App = () => {

  return (
    <>
   <RouterProvider router={router}/>
    </>
    
  )
}

export default App