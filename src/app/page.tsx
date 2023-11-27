import Image from "next/image";

import Link from "next/link";
import Hero from "@/components/sections/Hero";
import ProductCard from "@/components/ui/ProductCard";
import Qoute from "@/components/Qoute";
export default function Home() {
  return (
    <div className="container mx-auto px-5">
      <div>
        <Hero />
      </div>
      <Qoute />

      <div>
    
        <div>
          <ProductCard />
        </div>
        <footer className="grid grid-cols-2 gap-x-6 py-5 my-10">
    <button className="btn btn--secondary">Decline</button>
    <button className="btn btn--primary">Accept</button>
   </footer>
      </div>
    </div>
  );
}
