import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'



const Login = () => {
    const navigate = useNavigate();
    const [password , setPassword] = useState('');
    const [email,setEmail] = useState('');
    const handleSubmit = async(ev) => {
        ev.preventDefault();
        const response = await fetch("http://localhost:4000/login",{
        method : "POST",
        body : JSON.stringify({email,password}),
        headers : {'Content-Type' : 'application/json'},
    })
    console.log(response);
    if(response.ok){
        navigate('/');
    }else{
        alert("not allowed");
    }
    }
  return (
    <div>
        <div className='h-screen flex items-center justify-center'>
            <div className='border-2 border-gray-300 flex flex-col gap-5  rounded-md items-center justify-center sm:w-[400px] w-full  mx-6 '>
                <div className=' mb-5 mt-5'>
                    <h1 className=' text-2xl font-bold text-gray-500'>Login</h1>
                </div>
                <form className=' px-6 flex flex-col  w-full'>
                    <input type="text" placeholder="Email" className=' p-2 bg-transparent border-2 rounded-md' value={email} onChange={ev => setEmail(ev.target.value)}></input><br></br>
                    <input type="password" placeholder="password" value={password} className=' p-2 bg-transparent border-2 rounded-md' onChange={ev => setPassword(ev.target.value)}></input><br></br>
                    <button type='submit' onClick={handleSubmit} className='mt-4 px-3 py-2 bg-blue-20w-fit mx-auto bg-amber-100/70 text-amber-400 font-semibold rounded-md '>Submit</button>
                    <p className=' text-center mt-3 text-sm mb-3' >Create new account ? <Link className=' text-amber-400 font-semibold' to="/register">Register</Link></p>

                </form>


            </div>

        </div>
    </div>

  )
}

export default Login