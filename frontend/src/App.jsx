import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

 import { ToastContainer } from 'react-toastify';
import ProtectRoute from './util/ProtectRoute';

export default function App() {
  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Login/>} />

         <Route element={<ProtectRoute/>} >
             <Route path='/dashboard' element={<Dashboard/>} />
         </Route>
        </Routes>

      <ToastContainer className='absolute top-2 right-6' />
      </BrowserRouter>
      
    </>
  )
}
