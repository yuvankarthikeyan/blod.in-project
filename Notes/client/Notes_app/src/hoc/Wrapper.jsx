import React from 'react'

const Wrapper = (Component) => function Hoc(){
    return (
        <div className='w-full'>
            <div className=' max-w-7xl px-6 py-6 mx-auto'>
                <Component/>
            </div>
        </div>
      )
}

export default Wrapper;
