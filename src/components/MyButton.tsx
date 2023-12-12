import { useState } from "react";

export function MyButton() {
    const [count, setCount] = useState(0);
  
    function handleClick1() {
      setCount(count + 1); }

    function handleClick2() {
        setCount(count - 1);
    }
  
    return (
        <div>
      <button className="bg-gray-300 rounded py-5 px-5 m-5 text-blue-600 font-bold" onClick={handleClick1}>
        Clicked {count} times
      </button>
      <button className="bg-gray-300 rounded py-5 px-5 m-5 text-blue-600 font-bold" onClick={handleClick2}>
      Clicked {count} times
    </button>
    </div>
    );
  }
