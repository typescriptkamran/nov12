import React from 'react'
import Image from 'next/image'

const react = () => {
  return (
    <div className='flex flex-col h-screen w-full flex items-center justify-center'>

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

export default react