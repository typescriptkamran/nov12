import React from "react";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className= " w-auto">
      <div className="w-250 flex font-sans bg-slate-500 rounded-lg py-5 px-5">
        <div className="flex-none w-48 relative bg-slate-300 ">
          <Image
            src="/logopic.jpg"
            width={300}
            height={600}
            alt="kamran"
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl shadow-slate-200" loading="lazy"
            
          />
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-lg font-semibold text-primery-900">
              Services & Consultations
            </h1>
            <div className="text-lg font-semibold text-primery-500">
              $30.00 / Hours
            </div>
            <div className="w-full flex-none text-sm font-medium text-primery-700 mt-2">
              Available
            </div>
          </div>
          <div className="flex-row gap-5">
            <div className="flex gap-5 text-sm border-secondary px-5 py-5 my-5 mx5 ">
              <label>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value="xs"
                  checked
                />
                <div className="py-5 px-5 h-9 rounded-full flex items-center justify-center bg-slate-700 text-violet-100 peer-checked:bg-violet-600 peer-checked:text-white">
                  Next.js
                </div>
              </label>
              <label>
                <input
                  className="sr-only peer "
                  name="size"
                  type="radio"
                  value="s"
                />
                <div className="py-5 px-5 h-9 rounded-full flex items-center justify-center bg-slate-700 text-violet-100 peer-checked:bg-violet-600 peer-checked:text-white">
                  Chat Bot
                </div>
              </label>
              <label>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value="m"
                />
                <div className="py-5 px-5 h-9 rounded-full flex items-center justify-center bg-slate-700 text-violet-100 peer-checked:bg-violet-600 peer-checked:text-white">
                  Payment Intigration
                </div>
              </label>
              <label>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value="l"
                />
                <div className="py-5 px-5 h-9 rounded-full flex items-center justify-center bg-slate-700 text-violet-100 peer-checked:bg-violet-600 peer-checked:text-white">
                  SEO
                </div>
              </label>
              <label>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value="xl"
                />
                <div className="py-5 px-5 h-9 rounded-full flex items-center justify-center bg-slate-700 text-violet-100 peer-checked:bg-violet-600 peer-checked:text-white">
                  Social Media
                </div>
              </label>
            </div>
          </div>
          <div className="flex space-x-4 mb-6 text-sm font-medium">
            <div className="flex-auto flex space-x-4">
              <button
                className="px-6 font-semibold rounded-md bg-secendaryext-white"
                type="submit"
              >
                Get free Advise
              </button>
              <button
                className="px-6 font-semibold rounded-md border border-primery-200 text-primery-900"
                type="button"
              >
                Request Free Review
              </button>
            </div>
            <button
              className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-primery-300 border border-primery-200"
              type="button"
              aria-label="Like"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </button>
          </div>
          <p className="text-sm text-primery-700">
            Free advise and review for existing websites
          </p>
        </form>
      </div>
    </div>
  );
};

export default ProductCard;
