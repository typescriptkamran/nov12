import React from 'react';
import { MdMoreTime } from 'react-icons/md';
import { MdAccessTime } from "react-icons/md";


const Card = () => {
  return (
    <div>
      <div className="relative w-60 h-72 rounded-[45px] bg-zinc-900/90 p-5 m-5 overflow-hidden">
        <div className="absolute left-0 top-0 text-xl font-bold text-zinc-300 bg-slate-400 h-15 w-full flex gap-2 py-5 px-5 justify-center">
          <MdMoreTime />
          <h1 className="text-center">title of card</h1>
        </div>
        <p className="py-2 px-2 mt-16">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <div className='flex gap-2 items-center'>
            <MdAccessTime /> time
        </div>
        <div className="absolute bottom-0 left-0 bg-zinc-600 w-full h-20 flex items-center justify-center">
          <div className="flex flex-col gap-4">
            <button className="btn btn--primary">task completed</button>
            <button className="btn btn--secondary">edit task</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
