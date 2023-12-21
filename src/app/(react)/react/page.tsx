import React from 'react'
import Image from 'next/image'
import fCC from '@/components/react/FCC'
import Input from '@/components/react/Input'
import { useState, useEffect } from 'react'
import FCC from '@/components/react/FCC'

const react = () => {
  // move storedItems here
  const storedItems = JSON.parse(localStorage.getItem('items'))
  
  // const [colors, setColors] = useState([])
  // write a new useState. name the variable "items"
  // and make the initial value an empty array
  
  // iniialize useState with storedItems
  const [items, setItems] = useState([])
  
  // useEffect(() => {
  //   // custom logic aka "side effects"
  // }, [/* colors */])
  
  // write a new useEffect that "tracks"
  // items and console.logs items
  
  useEffect(() => {
    // localStorage.setItem('key', JSON.stringify(value))
    // store items state in localStorage
    // make the key 'items' and for the value, pass our
    // items state.
    localStorage.setItem('items', JSON.stringify(items))
    
    // const retrievedValue = JSON.parse(localStorage.getItem('key'))
    // use getItems to retrieve our "items" from localStorage
    // assign that to a new const called "storedItems"
    // console.log storedItems
  }, [items])
  return (
    <div className='flex flex-col h-screen w-full  items-center justify-center'>

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


<div>
      <FCC/>
      <Input items={items} setItems={setItems}/>
    </div>




    </div>
  )
}

export default react