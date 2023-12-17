import Background from '@/components/to-do-app/Background'
import Foreground from '@/components/to-do-app/Foreground'
import React from 'react'

const page = () => {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
        <Background />
        <Foreground />
    </div>
  )
}

export default page