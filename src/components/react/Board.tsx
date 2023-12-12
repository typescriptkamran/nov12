"use client"
import React, { useState } from "react";
import Box from "./Boxex";

type BoxValues = Array<null | string>;

const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [boxes, setBoxes] = useState<BoxValues>(Array(9).fill(null));

  function handleClick(i: number) {
    if (boxes[i] || calculateWinner(boxes))  {
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

  function calculateWinner(boxes: BoxValues) {
    const lines: Array<Array<number>> = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
        return boxes[a];
      }
    }
    return null;
  }
  const winner = calculateWinner(boxes);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }


  return (
    <div>
      <div className="status">{status}</div>
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
