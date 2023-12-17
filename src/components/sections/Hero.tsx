import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="grid grid-flow-col grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
      <div className="transform scale-110 -rotate-6 py-5 translate-x-4 animate-spin">
        <Image
          src="/logo.jpg"
          width={200}
          height={200}
          alt={"kamran"}
        ></Image>
      </div>
      <div className="md:col-start-2 xl:col-start-3 transform rotate-6 ">
        <Image
          src="/linkdin.jpg"
          width={1000}
          height={300}
          alt={"github"}
        ></Image>
      </div>
      <div className="md:col-span-2 lg:col-span-1 xl:col-span-1 scale-150 rotate-6 transform animate-pulse duration-1000 delay-500 animate-3 hover:transition-opacity-200">
        <Image
          src="/kamran.jpg"
          width={300}
          height={300}
          alt={"logo typescript insites"}
        ></Image>
      </div>
      <div className="md:row-start-1 xl:row-start-1 md:col-span-2 hover:scale-x-125 hover:scale-y-125 ">
        <Image
          className='rounded-full mx-auto shadow-lg shadow-yellow-300'
          src="/logopic.jpg"
          width={300}
          height={300}
          alt={"linkedin"}
        ></Image>
      </div>
      <div className="md:row-start-2 md:col-start-1 md:col-span-2 xl:col-span-2 hover:scale-x-125 hover:scale-y-125">
        <Image
          src="/github.jpg"
          width={600}
          height={300}
          alt={"github"}
        ></Image>
      </div>
    </div>
  );
};

export default Hero;
