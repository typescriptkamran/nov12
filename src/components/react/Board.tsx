"use client"
import React, { useState } from "react";
import Box from "./Boxex";

const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [boxes, setBoxes] = useState<Array<null | string>>(Array(9).fill(null));

  function handleClick(i: number) {
    if (boxes[i] !== null) {
      return;
    }
    const nextBoxes = boxes.slice();
    if (xIsNext) {
      nextBoxes[i] = "X";
    } else {
      nextBoxes[i] = "O";
    }
    setBoxes(nextBoxes);
    setXIsNext(!xIsNext);
  }

  return (
    <div>
      <div>
        <Box value={boxes[0]} onBoxClick={() => handleClick(0)} />
        <Box value={boxes[1]} onBoxClick={() => handleClick(1)} />
        <Box value={boxes[2]} onBoxClick={() => handleClick(2)} />
      </div>
      <div>
        <Box value={boxes[3]} onBoxClick={() => handleClick(3)} />
        <Box value={boxes[4]} onBoxClick={() => handleClick(4)} />
        <Box value={boxes[5]} onBoxClick={() => handleClick(5)} />
      </div>
      <div>
        <Box value={boxes[6]} onBoxClick={() => handleClick(6)} />
        <Box value={boxes[7]} onBoxClick={() => handleClick(7)} />
        <Box value={boxes[8]} onBoxClick={() => handleClick(8)} />
      </div>
    </div>
  );
};

export default Board;
