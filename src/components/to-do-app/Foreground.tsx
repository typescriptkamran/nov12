import React from 'react'
import { RiTodoFill } from "react-icons/ri";

const Foreground = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-zinc-800/50 z-[3]'>
      <div className='relitive w-60 h-60 rounded-lg bg-zinc-900/90 p-5'>
        <RiTodoFill />
        <p className='text-white text-sm leading-tight '>
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </p>
        
        <div className="absolute bottom-0 bg-white w-f h-20 left-0"></div>




        
      </div>


    </div>
    )
}

export default Foreground