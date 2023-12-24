"use client"
import { useLocalStorage } from '@/components/utilis/useLocalStorage'
import React from 'react'
import { useState } from 'react'


const page = () => {
    let [Value, setValue] = useState('')
 
    const [setItem, getItem] = useLocalStorage('value')



  return (
    <div>
        <div className='flex  flex-col w-full h-screen bg-slate-800'>
            <h1 className='mb-4 text-white text-3xl font-bold'>useLocalStorage</h1>
            <input type="text"
            value={Value} 
            onChange={(e) => setValue(e.target.value)} 
            className="bg-slate-300 p-3 w-96 rounded-md" /> 
            <div className='flex flex-row gap-4 m-5'>
                <button className='btn btn--primary  ' onClick={() => setItem(Value)}>Set</button>
                <button className='btn  btn--primary' onClick={() => console.log(getItem())} >Get</button>
                <button className='btn  btn--primary'>Remove</button>
                

            </div>


        </div>
        
    </div>
  )
}

export default page