import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const route = useNavigate();
  return (
    <>
    
        <nav className='flex justify-between items-center px-10 h-16 shadow-2xl sticky top-0 bg-white'>
            <div className="flex items-center justify-center">
                <img src="/images/logo.png" alt="" className='w-20' />
                <h1 className='text-3xl font-bold'><span className='text-[#1d7eff]'>Resume</span> Bulider</h1>
            </div>
            <div className="">
                <ul className='flex items-center gap-6 font-semibold '>
                  <li><a href="">Home</a></li>
                  <li><a href="">Template</a></li>
                  <li><Link to="/login">Login</Link></li>

                  <button onClick={()=>{route('/signup')}} className='text-white bg-[#1d7eff] py-2 rounded-lg px-6 shadow-2xl'>SignUp</button>
                </ul>
            </div>
        </nav>     
    
    </>
  )
}

export default Navbar
