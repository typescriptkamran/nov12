import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8 ">
  <div className="transform scale-110 -rotate-6 py-5 translate-x-4 animate-spin">
  <Image
            src="/logo.jpg"
            width={200}
            height={200}
            alt={"kamran"}
            
          ></Image>
  </div>
  <div className="col-start-3 transition delay-150 duration-300 ease-in-out ">
  <Image
            src="/linkdin.jpg"
            width={1000}
            height={500}
            alt={"github"}
            
          ></Image>
  </div>
  <div className="scale-150  rotate-6 transform animate-pulse duration-1000 delay-500 animate-3">
  <Image
            src="/kamran.jpg"
            width={300}
            height={300}
            alt={"logo typescript insites"}
            
          ></Image>
  </div>
  <div className="animate-pulse duration-1000 delay-500 animate-3">
  <Image
            src="/logopic.jpg"
            width={300}
            height={300}
            alt={"linkedin"}
            
          ></Image>
  </div>
  <div className="row-start-1 col-start-2 col-span-2 hover:scale-x-125 hover:scale-y-125 ">
  <Image
            src="/github.jpg"
            width={600}
            height={300}
            alt={"github"}
            
          ></Image>
  </div>
  
  
</div>
  )
}

export default Hero