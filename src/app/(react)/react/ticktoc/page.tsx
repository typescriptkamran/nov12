import Board from '@/components/react/Board'

import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'



const page = () => {
  

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Board/>
       
    </div>
  )
}

export default page