import React, { useState } from 'react'
import createsvg from "../assets/create.svg";
import { useNavigate } from 'react-router-dom';

const CreateNotes = () => {

  const navigate = useNavigate();

  const [title,setTitle] = useState('');
  const [content,setContent] = useState('');

  const handleSubmit = async(ev) => {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/notes",{
      method : "POST",
      body : JSON.stringify({title,content}),
      headers : {'Content-Type' : 'application/json'}
    });
    if(!response){
      alert('Error creating note');
    }else{
      alert("successfully created !");
      
    }
  }
  
  const [show,setShow] = useState(1);
  
  return (
    <div className='bg-white bg-opacity-10 backdrop:blur-lg rounded-b-md drop-shadow-xl'>
      <div className='flex justify-center items-center py-6 flex-col gap-10'>
        <img src={createsvg} className='w-[25%]'/>
        <p className=' text-2xl font-semibold text-white'>Select the + icon to create Notes</p>
        <button className='text-4xl font-semibold rounded-full w-12 h-12 bg-amber-300 text-white' onClick={() => setShow(2)}> +
      </button>
      </div>
      {show == 2 && (
        <div className='rounded-md absolute bg-indigo-950 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 mx-auto w-[400px]  h-[500px]' >
        <form className='flex flex-col w-full h-full justify-center items-center px-6 gap-8' onSubmit={handleSubmit}>
          <input type='text' placeholder='Title' className='w-full p-2 bg-indigo-900 bg-opacity-50 text-indigo-300' value={title} onChange={ev=>setTitle(ev.target.value)}/>
          <textarea cols="40" rows="12" placeholder='Start writing here..' className='w-full bg-indigo-900 bg-opacity-50 p-2 text-indigo-300' value={content} onChange={ev=>setContent(ev.target.value)}></textarea>
          <div className=''>
            <button type='submit' className='mx-4 bg-indigo-800 bg-opacity-30 rounded-lg px-3 py-2 text-indigo-300'>Submit</button>
            <button className='mx-4 bg-rose-700 bg-opacity-50 rounded-lg text-slate-300 px-3 py-2' onClick={() => setShow(1)}>Close</button>
          </div>

        </form>

      </div>
      )}
    </div>
  )
}

export default CreateNotes