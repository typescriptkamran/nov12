"use client"
import React from 'react';
import { MdMoreTime } from 'react-icons/md';
import { MdAccessTime } from "react-icons/md";
import { motion } from "framer-motion"

const Card = ({data, referance}:any) => {
  return (
    <motion.div drag dragConstraints={referance}>
      <div className="relative w-60 h-72 rounded-[45px] bg-zinc-900/90 p-5 m-5 overflow-hidden">
        <div className={`absolute left-0 top-0 text-xl font-bold ${data.completed ? 'bg-slate-300' : 'bg-zinc-300'} bg-slate-400 h-15 w-full flex gap-2 py-5 px-5 justify-center`}>
          <MdMoreTime />
          <h1 className="text-center text-sm font-bold">{data.title}</h1>
        </div>
        <p className="py-2 px-2 mt-16">
          {data.description}
        </p>
        <div className='flex gap-2 items-center'>
            TAT<MdAccessTime /> {data.time}
        </div>
        <div className={`absolute bottom-0 left-0 ${data.completed ? 'bg-slate-600' : 'bg-red-300'} w-full h-20 flex items-center justify-center`}>
          <div className="flex flex-col gap-4">
            {data.completed ? <button className="btn btn--primary">Delete Task</button> :
            <button  className="btn btn--secondary">Task Completed</button>}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
