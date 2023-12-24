"use client"
import React from 'react'
import Image from 'next/image'
import fCC from '@/components/react/FCC'
import { useState, useEffect } from 'react'
import FCC from '@/components/react/FCC'
import Input from '@/components/react/Input'

const Page = () => {
  
   const [items, setItems] = useState([])

   useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))

    console.log(items)


   }, [items])
  
  return (
    <div className='flex flex-col h-screen w-full  items-center justify-center'>

      <div className='m-5 py-4'>
        <a href="https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/"> code </a>
      
      </div>

     
    <div>
      <FCC/>
      <Input items={items} setItems={setItems} />
      
    </div>

    <article className='prose bg-slate-200 py-5 px-5 m-5'>
        <h1>My First Component</h1>
        <ol>
          <li>Components: UI Building Blocks</li>
          <li>Defining a Component</li>
          <li>Using a Component</li>
        </ol>
      </article>
      
      <Image
        src="https://i.imgur.com/MK3eW3Am.jpg"
        alt="Katherine Johnson"
        height={300}
        width={300}
      />






    </div>
  )
}

export default Page