import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const route = useNavigate();

    const handleSubmitLogin = async(e) =>{
        try{
            e.preventDefault();
            const res = await axios.post('http://localhost:3000/api/auth/login' ,{email, password}, {withCredentials:true} );
            if(res.data.token){
                localStorage.setItem('authtoken', res.data.token)            
                toast.success(res.data.message);
                route('/dashboard')
            }
            
        }catch(err){
            if(err.response){
                toast.error(err.response.data.message);
            }else{
                toast.error("API Connection Problem");     
            }
        }
    }


    return (
        <>

            <section className='h-screen flex flex-col justify-center items-center gap-6 px-32' id='login'>

                <h1 className='text-5xl font-bold'>Welcome Back!</h1>
                <h3 className='text-2xl'>Login to user account</h3>

                <form onSubmit={handleSubmitLogin} action="" className='flex justify-center items-center flex-col gap-6 w-1/3 '>

                    <div className="flex flex-col w-full">
                        <input type="text" id="email" required placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} className='border-2 border-gray-400 px-4 py-2 rounded-lg outline-0'/>
                    </div>


                    <div className="flex flex-col w-full">
                        <input type="password" id="password" required placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} className='border-2 border-gray-400 px-4 py-2 rounded-lg outline-0'/>
                    </div>

                    <button className='bg-[#1d6eff] w-full p-2 text-white rounded-lg text-lg font-bold shadow-2xl' >Login</button>
                </form>

                <div className="flex justify-center items-center w-1/3 gap-4">
                    <hr className="w-full border-gray-400" />
                        <h2 className='font-bold text-gray-700'>Or</h2>
                    <hr className="w-full border-gray-400" />

                </div>

                <div className="flex justify-center items-center gap-4">
                    <button onClick={()=>{toast.warn('This is Comming Soon Plzz Login With email and password')}} className='flex justify-center items-center gap-2 border-2 border-gray-400 px-6 py-2 rounded-lg hover:bg-black hover:text-white duration-500 hover:border-none cursor-pointer'>
                        <img src="/images/google.png" alt="" className='w-6'/>
                        Continue with Google
                    </button>

                    <button onClick={()=>{toast.warn('This is Comming Soon Plzz Login With email and password')}} className='flex justify-center items-center gap-2 border-2 border-gray-400 px-6 py-2 rounded-lg hover:bg-black hover:text-white duration-500 hover:border-none cursor-pointer'>
                        <img src="/images/facebook.png" alt="" className='w-6'/>
                        Continue with Facebook
                    </button>
                </div>
            </section>

        </>
    )
}
