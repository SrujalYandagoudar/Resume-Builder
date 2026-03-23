import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

const Signup = () => {

    const route = useNavigate();

     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');
     const [email, setEmail] = useState('');

    const handleSignup = async(e) =>{
        try{
            e.preventDefault();
            const res = await axios.post('http://localhost:3000/api/auth/signup', {username, password, email}, {withCredentials:true});
            toast.success(res.data.message);
             route('/login')
        }catch(err){
            if(err.response){
                toast.error(err.response.data.message);
               
            }else{
                toast.error('API Connection Error')
            }
        }
    }

  return (
    <div>
    <section className='h-screen flex flex-col justify-center items-center gap-6 px-32' id='signup'>
    
                    <h1 className='text-5xl font-bold'>Create Your Account</h1>
                    <h3 className='text-2xl'>Join us and start building your resume</h3>
    
                    <form  action="" onSubmit={handleSignup} className='flex justify-center items-center flex-col gap-6 w-1/3 '>
    
                        <div className="flex flex-col w-full">
                            <input type="text" id="username" required placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} className='border-2 border-gray-400 px-4 py-2 rounded-lg outline-0'/>
                        </div>

                        <div className="flex flex-col w-full">
                            <input type="email" required placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} className='border-2 border-gray-400 px-4 py-2 rounded-lg outline-0'/>
                        </div>
    
    
                        <div className="flex flex-col w-full">
                            <input type="password" id="password" required placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} className='border-2 border-gray-400 px-4 py-2 rounded-lg outline-0'/>
                        </div>
    
                        <button className='bg-[#1d6eff] w-full p-2 text-white rounded-lg text-lg font-bold shadow-2xl' >Sign Up</button>
                    </form>
    
                    <div className="flex justify-center items-center w-1/3 gap-4">
                        <hr className="w-full border-gray-400" />
                            <h2 className='font-bold text-gray-700'>Or</h2>
                        <hr className="w-full border-gray-400" />
    
                    </div>
    
                    <div className="flex justify-center items-center gap-4">
                        <button onClick={()=>{toast.warn('This is Comming Soon Plzz Login With username and password')}} className='flex justify-center items-center gap-2 border-2 border-gray-400 px-6 py-2 rounded-lg hover:bg-black hover:text-white duration-500 hover:border-none cursor-pointer'>
                            <img src="/images/google.png" alt="" className='w-6'/>
                            Continue with Google
                        </button>
    
                        <button onClick={()=>{toast.warn('This is Comming Soon Plzz Login With username and password')}} className='flex justify-center items-center gap-2 border-2 border-gray-400 px-6 py-2 rounded-lg hover:bg-black hover:text-white duration-500 hover:border-none cursor-pointer'>
                            <img src="/images/facebook.png" alt="" className='w-6'/>
                            Continue with Facebook
                        </button>
                    </div>
                </section>
    </div>
  )
}

export default Signup
