"use client"
import React from "react";

interface BoxProps {
  value: string | null;
  onBoxClick: () => void; // Adjust the type as needed
}

const Box: React.FC<BoxProps> = ({ value, onBoxClick }) => {
  return (
    <button
      onClick={onBoxClick}
      className="square text-black m-1 py-6 px-10 font-bold text-xl shadow-xl shadow-gray-600 bg-white border-spacing-3 border-gray-800 border-2 rounded-lg"
    >
      {value}
    </button>
  );
};

export default Box;