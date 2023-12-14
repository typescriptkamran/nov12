import Image from 'next/image'
import React from 'react'

const Qoute = () => {
  return (
    <div>  <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 items-center px-10 py-10 my-8 mx-8">
    <Image
      className="w-24 h-24 md:w-48 md:h-auto md:rounded-3xl text-center my-5 mx-6 "
      src="/kamran.jpg"
      alt=""
      width="384"
      height="512"
    />
    <div className="pt-6 md:p-8 text-center md:text-center space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
         Helo this is quatations        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Muhammad Kamran
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Chife at ESP
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default Qoute