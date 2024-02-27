import React, { useState } from 'react'



const ExistingNotes = () => {
    const [noteInfo,setNoteInfo] = useState([]);
    const refresh = async() => {
      const response = await fetch("http://localhost:4000/notes",{
        method :"GET"
      });
      const data = await response.json();
      setNoteInfo(data.notesDoc);
      console.log(response);
      console.log(noteInfo);
      
      
    }

    return (
        <>
        <div className='flex flex-wrap gap-5 p-9 bg-white bg-opacity-10 backdrop:blur-lg rounded-b-md drop-shadow-xl relative min-h-[460px]'>
                     
                    
                  {noteInfo.map((note,index) => (
                    <div key={index} className=' bg-white bg-opacity-20 w-52 h-56 flex flex-col gap-4 items-center justify-center rounded-md hover:bg-opacity-10 cursor-pointer '>
                      <h2 className=' font-bold text-slate-300'>{note.title}</h2>
                      
                      <div className='w-36 h-32 overflow-ellipsis overflow-hidden text-slate-300 text-opacity-80 text-center text-sm'><p>{note.content}</p></div>
                      </div>
                  ))}

                    <div className='absolute bottom-0 left-[50%] -translate-x-[50%]'>
                      <button className='my-4 px-3 py-2 bg-white bg-opacity-10 text-slate-300 hover:text-white drop-shadow-lg rounded-md hover:bg-opacity-20' onClick={refresh}>Refresh</button>

                    </div>
                    
    
    
        </div>
        </>
      )
}

export default ExistingNotes