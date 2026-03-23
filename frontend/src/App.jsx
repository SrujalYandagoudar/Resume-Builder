import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

 import { ToastContainer } from 'react-toastify';
import ProtectRoute from './util/ProtectRoute';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Signup from './pages/Signup';

export default function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />


         <Route element={<ProtectRoute/>} >
             <Route path='/dashboard' element={<Dashboard/>} />
         </Route>
        </Routes>

      <ToastContainer className='absolute top-2 right-6' />
      </BrowserRouter>
      
    </>
  )
}
