import React, { useState } from 'react'
import Dropdown from "react-dropdown";
import 'react-dropdown/style.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
    const {value,setValue} = useState('Yellow');
    const handleChange = (event) => {
        setValue(event.target.value);
        
    }
    
  return (
    <div className='w-full'>
        <div className='max-w-7xl   relative flex items-center justify-between px-6 py-6 mx-auto'>
            <div className='flex items-start justify-center flex-row gap-1'>
               <h4 className=' font-semibold text-white'>Notes  </h4>
               <Link className=' text-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg>
</Link>
            </div>
            <div>
                <ul className=' flex'>
                    <li>
                        <select value={value} onChange={handleChange} className=' px-3 py-2 mx-2 bg-white bg-opacity-20 text-white drop-shadow-md'>
                            <option value="yellow" >yellow</option>
                            <option value="pink"   >pink</option>
                            <option value="blue">blue</option>
                        </select>
                    </li>
                    <li>
                        <select value={value} onChange={handleChange} className='px-3 py-2 mx-2 bg-white bg-opacity-20 text-white drop-shadow-lg'>
                            <option value="">Light</option>
                            <option value="">Dark</option>
                        </select>
                    </li>
                    <li>
                    <select value={value} onChange={handleChange} className='px-3 py-2 mx-2 bg-white bg-opacity-20 text-white drop-shadow-md' >
                    <option value="login"><Link><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
</Link> Mady</option>
                </select>
                    </li>

                </ul>
                

            </div>
            
        </div>
    </div>
  )
}

export default Navbar