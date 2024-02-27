import React, { useEffect, useState } from 'react'
import List from './components/List';
import axios from 'axios';
import { baseURL } from './utils/constant';

const Home = () => {
    const[input,setInput] = useState('');

    const [task,setTask] = useState([]);
    const [updateId,setUpdateId] = useState(null);
    const [updateUI,setUpdateUI] = useState(false);

    useEffect(()=> async() =>{
        await axios.get(`${baseURL}/get`).then((res)=>{
            console.log(res.data);
            setTask(res.data);
        })

    },[updateUI]);


    const addTask = () => {
        axios.post(`${baseURL}/save`,{task : input}).then((res) => {
            console.log(res.data);
            console.log("ji");
            setInput("");
            setUpdateUI((prevState) => !prevState);
        });
    }

    const updateMode = (id,text) => {
        console.log(text);
        setInput(text);
        setUpdateId(id);

    }
    const updateTask = () => {
        axios.put(`${baseURL}/update/${updateId}`,{task : input}).then((res) => {
            console.log(res.data);
            setUpdateUI((prevState) => !prevState);
            setUpdateId(null);
            setInput("");
        })
    }
  return (
    <div className='relative flex flex-col  justify-center min-h-screen bg-indigo-950 overflow-hidden'>
        <div className='absolute inset-0 bg-image opacity-20'>

        </div>
        <div className='relative sm:max-w-lg sm:px-10  sm:mx-auto bg-indigo-900 bg-opacity-30 sm:rounded-lg drop-shadow-2xl py-10 px-6 w-full'>
               <h1 className=' text-indigo-400 text-center font-bold text-3xl drop-shadow-lg shadow-indigo-400 tracking-wider first-letter:text-5xl'>TO/DO</h1>
               <div className=' py-6 flex flex-row justify-between'>
               <input value={input} onChange={(ev)=> setInput(ev.target.value)} className=' hover:drop-shadow-xl w-full p-3 bg-transparent border-2 border-indigo-800 placeholder:text-indigo-500 outline-none active:outline-indigo-500 focus:outline-indigo-500 focus:border-transparent rounded-lg focus:drop-shadow-xl text-indigo-500' placeholder='Enter task'/>
               
               <button type='submit' onClick={updateId ? updateTask : addTask} className='px-4 py-2 bg-indigo-800 bg-opacity-80 text-indigo-300 ml-3  rounded-lg hover:text-indigo-50 hover:drop-shadow-lg'>
                {updateId ? "Update" : "submit"}
                </button>
               </div>


               <ul>
                <h4 className=' text-center text-indigo-400 font-semibold'>Tasks To be done !</h4>
                {task.map((task) => (
                    <List key={task._id} id={task._id} task={task.task} setUpdateUI={setUpdateUI} updateMode={updateMode}/>
                )) }
               </ul>
               

        </div>  
    </div>
  )
}

export default Home