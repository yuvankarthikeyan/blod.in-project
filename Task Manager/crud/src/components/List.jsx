import axios from 'axios'
import React, { useEffect } from 'react'
import {HiOutlinePencil,HiOutlineXMark} from "react-icons/hi2"
import { baseURL } from '../utils/constant'

const List = ({id,task,setUpdateUI,updateMode}) => {

    const removeTask =async () => {
        console.log("workig");
        await axios.delete(`${baseURL}/remove/${id}`).then((res) => {
            console.log(res);
            setUpdateUI((prevState) => !prevState);
        })
    }
    
  return (
    <li className='flex items-center justify-between p-3 border-2 border-indigo-800 rounded-sm text-indigo-400 hover:text-indigo-300 drop-shadow-lg hover:border-indigo-500 my-2'>
        
        {task}
        <div className='flex gap-3'>
            <HiOutlinePencil className=' cursor-pointer' onClick={() => updateMode(id,task)}/>
            <HiOutlineXMark className=' cursor-pointer' onClick={removeTask}/>

        </div>
    </li>
  )
}

export default List