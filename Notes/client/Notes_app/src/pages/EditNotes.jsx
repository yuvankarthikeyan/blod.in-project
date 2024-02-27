import React, { useEffect } from 'react'
import { useState } from 'react';
const EditNotes = () => {
  const [id,setId] = useState('');
  

  const deleteNote = async() => {
    console.log(id);
    const response = await fetch("http://localhost:4000/notes",{
      method : "DELETE",
      body : JSON.stringify({
        id
      })
    });
    const data = await response.json();
    console.log(data);
    console.log(response);                    
  }
  const [noteInfo,setNoteInfo] = useState([]);
    useEffect(
      ()=> async() =>{
        const response = await fetch("http://localhost:4000/notes",{
          method :"GET"
        });
        const data = await response.json();
        setNoteInfo(data.notesDoc);
        console.log(response);
        console.log(noteInfo);
      
    },[]);
    return (
        <>
        <div className='flex flex-wrap gap-5 p-9 bg-white bg-opacity-10 backdrop:blur-lg rounded-b-md drop-shadow-xl relative min-h-[460px]'>
                     
                    
                     {noteInfo.map((note,index) => (
                       <div key={index} className=' bg-white bg-opacity-20 w-52 h-72 flex flex-col gap-4 items-center justify-around drop-shadow-xl rounded-md hover:bg-opacity-10'>
                         <h2 className=' font-bold text-slate-300'>{note.title}</h2>

                         <div className='w-36 h-32 overflow-ellipsis overflow-hidden text-slate-300 text-opacity-80 text-center'>

                         <p className='text-sm'>{note.content}</p>
                         </div>
                         
                         <div className='flex items-center justify-between w-full px-4'>
                         <button className=' text-slate-300 text-opacity-70 p-2 bg-white bg-opacity-10 drop-shadow-xl hover:text-white rounded-full' onClick={deleteNote} ><svg onClick={()=>setId(note._id)}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
</button>
<button className=' text-slate-300 text-opacity-70 p-2 bg-white bg-opacity-10 drop-shadow-xl hover:text-white rounded-full'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
</svg>

</button>
                         </div>
                         </div>
                     ))}
   
                      
                       
       
       
           </div>
        </>
      )
}

export default EditNotes