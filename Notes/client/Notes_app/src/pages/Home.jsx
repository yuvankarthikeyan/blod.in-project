import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import "./Home.css";
import CreateNotes from './CreateNotes';
import ExistingNotes from './ExistingNotes';
import EditNotes from './EditNotes';
import Footer from '../components/Footer';


const Home = () => {
  const [toggle,setToggle] = useState(1);
  const [show,setShow] = useState(1);
  return (
    <>
      <Navbar/>
      <div className='w-full relative'>
        <div className=' max-w-7xl mx-auto px-6 py-6 '>
          <div className='relative h-full'>
            <div className={toggle == 1 ? "showcontent" : "content"}>
            <h1 className="text-5xl font-bold mb-4 text-white">Create Your Amazing Notes</h1>
            
            </div>
            <div className={toggle == 2 ? "showcontent" : "content"}>
            <h1 className="text-5xl font-bold mb-4 text-white">Analyse your old Notes</h1>
            
            </div>
            <div className={toggle == 3 ? "showcontent" : "content"}>
            <h1 className="text-5xl font-bold mb-4 text-white">Make some changes ? ..</h1>
            
            </div>
            <div className=''>
              <ul className='flex justify-between bg-white bg-opacity-20 backdrop:blur-lg drop-shadow-lg rounded-t-md  gap-5'>
                <li className='w-full'><button onClick={() => setToggle(1)} className={toggle == 1 ? 'bg-white bg-opacity-30 w-full p-2 text-white font-semibold' : 'w-full p-2 text-zinc-300 font-semibold' }>Create</button></li>
                <li className='w-full'><button onClick={() => setToggle(2)} className={toggle == 2 ? 'bg-white bg-opacity-30 w-full p-2 font-semibold text-white' : 'w-full p-2 font-semibold text-zinc-300'}>Exist</button></li>
                <li className='w-full'><button onClick={() => setToggle(3)} className={toggle == 3 ? 'bg-white bg-opacity-30 w-full p-2 font-semibold text-white' : 'w-full p-2 font-semibold text-zinc-300'}>Edit</button></li>
              </ul>

            </div>
            
            <div className={toggle == 1 ? "showcontent" : "content"}>
              <CreateNotes/>
            </div>
            <div className={toggle == 2 ? "showcontent" : "content"}>
             <div className=''>
             <ExistingNotes/>
             </div>
              


            </div>
            <div className={toggle == 3 ? "showcontent" : "content"}>
              <EditNotes/>
              


            </div>
            
          </div>
        </div>
        
      </div>
      <Footer/>
    </>
  )
}

export default Home;

