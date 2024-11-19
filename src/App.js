import './App.css';
import LandingPage from './Component/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Component/NavBar';
import { Children, useState } from 'react';
import EditingPage from './Component/EditingPage';
import Login from './Component/Login';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      element: <><NavBar/><Outlet/></>,
      children:[
        {
          path: "/",
          element: <LandingPage/>,
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/shirt",
          element: <EditingPage type="shirt"/>
        },
        {
          path: "/mug",
          element: <EditingPage type="mug"/>
      }]
    }
  ]);
  return (
 <>
 <RouterProvider router={router}/>
 </>
  );
}

export default App;
