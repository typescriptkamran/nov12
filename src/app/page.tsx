import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import ProductCard from "@/components/ui/ProductCard";
import Qoute from "@/components/Qoute";
import VedioCard from "@/components/ui/VedioCard";
import Chat from "@/components/ui/Chat";
import Team from "@/components/ui/Team";

export default function Home() {
  return (
    <div>
      <div>
        <Hero />
      </div>

      <Qoute />

      <div>
        <div>
          <div className="flex gap-6 my-5 mx-5 justify-center">
            <button className="btn btn--secondary">Decline</button>
            <button className="btn btn--primary">Accept</button>
          </div>
        </div>

        <div>
          <VedioCard />
        </div>
        <div className="flex m-5">
          <div className="flex justify-end ">
            <Team />
          </div>
          <div className="flex">
            <Chat />
          </div>
        </div>
        <div className="text-6xl text-center font-extrabold">
          Text Properties
        </div>
        <div>
          <h1 className="text-3xl font-bold">checking text leading-snug</h1>
          <p className="text-slate-300 leading-snug ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            quidem quos quaerat, libero odio dolorum dicta id esse. Recusandae,
            molestiae blanditiis pariatur alias et animi placeat molestias
            necessitatibus eveniet vel.
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-bold">checking text leading-normal </h1>
          <p className="text-slate-300 leading-normal ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            quidem quos quaerat, libero odio dolorum dicta id esse. Recusandae,
            molestiae blanditiis pariatur alias et animi placeat molestias
            necessitatibus eveniet vel.
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-bold">checking text leading-tight </h1>
          <p className="text-slate-300 leading-tight ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            quidem quos quaerat, libero odio dolorum dicta id esse. Recusandae,
            molestiae blanditiis pariatur alias et animi placeat molestias
            necessitatibus eveniet vel.
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-bold">checking text leading-relaxed </h1>
          <p className="text-slate-300 leading-relaxed ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            quidem quos quaerat, libero odio dolorum dicta id esse. Recusandae,
            molestiae blanditiis pariatur alias et animi placeat molestias
            necessitatibus eveniet vel.
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-bold">checking text leading-loose </h1>
          <p className="text-slate-300 leading-loose ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            quidem quos quaerat, libero odio dolorum dicta id esse. Recusandae,
            molestiae blanditiis pariatur alias et animi placeat molestias
            necessitatibus eveniet vel.
          </p>
        </div>

        <div>
          <div className="mb-10 w-full bg-gradient-to-r from-gray-50 to-blue-300 text-blue-600 p-10 border-4 justify-center">
            <div className="mb-10">
              <button className="p-10 mx-10 shadow-sm bg-white">One</button>
              <button className="p-10 mx-10 shadow-sm bg-white">Two</button>
              <button className="p-10 mx-10 shadow-lg bg-white">Three</button>
            </div>
            <div>
              <button className="p-10 mx-10 shadow-xl bg-white">Four</button>
              <button className="p-10 mx-10 shadow-2xl bg-white">Five</button>
              <button className="p-10 mx-10 shadow-inner bg-white">Six</button>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div className="">
              <button className="p-10 border border-black">One</button>
              <button className="m-10 border border-black">Two</button>
              <button className="m-2 p-2 border-4 border-black">Three</button>
            </div>
            <div>
              <button className="m-4 p-4 border-2 border-black rounded-md">
                Four
              </button>
              <button className="m-4 p-4 border-2 border-black rounded-2xl">
                Five
              </button>
              <button className="m-4 p-4 border-2 border-black rounded-full">
                report erratum • discuss Borders • 31 Six
              </button>
            </div>
          </div>
          <div>
            <div className="mb-10 bg-slate-300">
              <button className="p-10 border border-black">One</button>
              <button className="m-10 border border-black">Two</button>
              <button className="m-2 p-2 border-4 border-black">Three</button>
            </div>
            <div>
              <button className="m-4 p-4 border-2 border-black rounded-md">
                Four
              </button>
              <button className="m-4 p-4 border-2 border-black rounded-2xl">
                Five
              </button>
              <button className="m-4 p-4 border-2 border-black rounded-full">
                report erratum • discuss Borders • 31 Six
              </button>
              <div>
              <div className="antialiased text-gray-900 px-6">
                  <div className="max-w-xl mx-auto py-12 divide-y md:max-w-4xl">
                    <div className="w-full bg-slate-400 ">
                      <h1 className="text-4xl font-bold bg-slate-200">@tailwindcss/forms examples</h1>
                      <p className="mt-2 text-lg text-gray-600">
                        An opinionated form reset designed to make form elements easy to style with utility
                        classes.
                      </p>
                      <div className="mt-4 flex space-x-4">
                        <a className="text-lg underline" href="https://github.com/tailwindlabs/tailwindcss-forms"
                          >Documentation</a
                        >
                        <a className="text-lg underline" href="/kitchen-sink.html">Kitchen Sink</a>
                      </div>
                    </div>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
