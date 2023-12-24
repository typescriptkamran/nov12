"use client"
import Background from '@/components/to-do-app/Background'
import Foreground from '@/components/to-do-app/Foreground'
import React from 'react'

const ToDO = () => {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        
      </div>
        <Background />
        
        <Foreground />
        
        
    </div>
  )
}

export default ToDO