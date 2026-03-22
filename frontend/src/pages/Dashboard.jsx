import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export default function Dashboard() {
    const [user, setUser] = useState(null)

    useEffect(()=>{
        const fetchDetail = async() => {
            try{
                const res = await axios.get('http://localhost:3000/api/user', {withCredentials:true});
                setUser(res.data.userDetail);
                console.log(user);
                console.log(res.data.userDetail);
                

                
            }catch(err){
                if(err.response){
                    toast.error(err.response.data.message);
                }else{
                    console.log("API Connection Problem");
                    
                }
            }
        }
        fetchDetail();
    },[])
  return (
    <>

        <section className='h-screen flex justify-center items-center'> 
            <h1 className='text-5xl'>It Is Dashboard</h1>

            {user && 
                <p>{user.username}</p>
            }
         
        </section>
    
    </>
  )
}
