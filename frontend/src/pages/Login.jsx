import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const route = useNavigate();

    const handleSubmitLogin = async(e) =>{
        try{
            e.preventDefault();
            const res = await axios.post('http://localhost:3000/api/auth/login' ,{username, password}, {withCredentials:true} );
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

            <section className='h-screen flex justify-center items-center' id='Login'>
                <form onSubmit={handleSubmitLogin} action="" className='flex justify-center items-center flex-col gap-6 bg-black/40 backdrop:backdrop-blur-2xl p-10 rounded-2xl shadow-2xl shadow-blue-300 '>
                    <h1 className='font-bold text-2xl'>Login</h1>

                    <div className="flex flex-col w-full">
                        <label htmlFor="">Username:</label>
                        <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} className='bg-white/80 text-black rounded-xl px-4 py-1 outline-0'/>
                    </div>


                    <div className="flex flex-col w-full">
                        <label htmlFor="">Password:</label>
                        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} className='bg-white/80 text-black rounded-xl px-4 py-1 outline-0'/>
                    </div>

                    <button className='bg-sky-500 w-full p-1 rounded-2xl shadow-2xl' >Login</button>
                </form>
            </section>

        </>
    )
}
