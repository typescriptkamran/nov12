import React from 'react'
import Image from 'next/image'

const Chat = () => {
  return (
    <div className="px-5 py-5 m-5"><div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
    <div className="shrink-0">
      <Image  src="/chitchat.svg" width={75} height={75} alt="ChitChat Logo" className="h-12 w-12"/>
    </div>
    <div>
      <div className="text-xl font-medium text-black">ChitChat</div>
      <p className="text-slate-500">You have a new message!</p>
    </div>

  </div></div>
  )
}

export default Chat