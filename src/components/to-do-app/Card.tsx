import React from 'react'
import { MdMoreTime } from "react-icons/md";


const card = () => {
  return (
    <div>
        <div className="relative w-60 h-72 rounded-[60px] bg-zinc-900/90 p-5 m-5">
            <div className="absolute left-0 top-0 rounded-t-[60px] text-xl font-bold text-zinc-300 bg-slate-400 h-20 w-full flex gap-2 py-5 px-5 justify-center">
                <MdMoreTime />
                <h1 className='text-center'>title of card</h1>
            </div>
            <p className='py-2 px-2 mt-16'>
                Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <div className="absolute bottom-0 left-0 bg-zinc-600 w-full h-20 rounded-b-[60px] text-center ">
                this is footer
            </div>

        </div>
    </div>
  )
}

export default card