import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Register = () => {
    const navigate = useNavigate();
   const [fullname , setFullName] = useState('');
   const [username , setUserName] = useState('');
   const [email,setEmail]= useState('');
   const [password , setPassword] = useState('');
   const [dept , setDept]= useState('');
   const handleSubmit = async(ev) =>{
    ev.preventDefault();
   alert("submited");
   const response =await fetch("http://localhost:4000/register",{
    method : 'POST',
    body : JSON.stringify({fullname,username,email,password,dept}),
    headers : {'Content-Type' : 'application/json'}
   })
   console.log(response);

   if(response.ok) {
    navigate('/login');
    
   }
}
  return (
    <div>
        <div className='h-screen flex items-center justify-center'>
            <div className='border-2 border-gray-300 flex flex-col gap-5  rounded-md items-center justify-center sm:w-[400px]  w-full  mx-6 '>
                <div className=' mb-5 mt-5'>
                    <h1 className=' text-2xl font-bold text-gray-100'>Register</h1>
                </div>
                <form className=' px-6 flex flex-col  w-full' onSubmit={handleSubmit}>
                    <input type="text" placeholder="Full Name" value={fullname} className=' p-2 bg-transparent border-2 rounded-md outline-white' onChange={ev => setFullName(ev.target.value)}></input><br></br>
                    <input type="text" placeholder="User Name" value={username} className=' p-2 bg-transparent border-2 rounded-md' onChange={ev => setUserName(ev.target.value)}></input><br></br>
                    <input type="text" placeholder="Email" value={email} className=' p-2 bg-transparent border-2 rounded-md' onChange={ev => setEmail(ev.target.value)}></input><br></br>
                    <input type="password" placeholder="password" value={password} className=' p-2 bg-transparent border-2 rounded-md' onChange={ev => setPassword(ev.target.value)}></input><br></br>
                    <input type="text" placeholder='Department' value={dept} className=' p-2 bg-transparent border-2 rounded-md' onChange={ev => setDept(ev.target.value)} />
                    <button type='submit' className='mt-4 px-3 py-2 bg-blue-20w-fit mx-auto bg-amber-100/70 text-amber-400 font-semibold rounded-md '>Submit</button>
                    <p className=' text-center mt-3 text-sm mb-4'>Already have an account ? <Link className=' text-amber-400 font-semibold ' to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register;