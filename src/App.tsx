import React, { useState } from 'react';
import { Navbar, ThemeProvider } from 'react-bootstrap';
import './App.css';
import Login from './auth/login';
import {
  BrowserRouter,
  createBrowserRouter,
  redirect,
  Route,
  RouterProvider,
  Routes,
  useNavigate,
} from "react-router-dom";
import AllProduct from './Product/AllProduct';
import AlignmentExample from './routes/Nav';
import Cookies from 'js-cookie';
import Protected from './routes/Protected';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//   },
//   {
//     path: "/users",
//     element: <Login />,
//   },
//   {
//     path: "/products",
//     element: <AllProduct />,
//   },
// ]);



function App() {
  const getSession = () => {
 
    const jwt = Cookies.get('token')
    let session
    try {
      if (jwt) {
        const base64Url = jwt.split('.')[1]
        const base64 = base64Url.replace('-', '+').replace('_', '/')
        // what is window.atob ?
        // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob
        session = JSON.parse(window.atob(base64))
      }
    } catch (error) {
      
     
      console.log(error)
    }
    return session
  }
  console.log(getSession());
  
  return (

    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >

      <AlignmentExample />
      <BrowserRouter>
        <div>
          <Navbar />
         
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/products' element={<Protected isLoggedIn={getSession()}> <AllProduct /> </Protected> } />
            <Route path='/Login' element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
      {/* <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="products" element={<AllProduct />} />
            <Route path="contact" element={<AllProduct />} />
            <Route path="*" element={<Login />} /> 
        </Routes>
    </BrowserRouter> */}
    </ThemeProvider>

  );
}

export default App;

