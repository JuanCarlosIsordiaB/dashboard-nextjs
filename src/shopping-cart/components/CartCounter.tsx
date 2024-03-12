'use client';
import React, { useState } from "react";

interface Props{
    value?: number;
}

export const CartCounter = ({value = 0}: Props) => {
    const [num, setNum] = useState(value);
  return (
    <>
      <span className="text-9xl">{num}</span>
      <div className="flex">
        <button
          onClick={() => setNum(num + 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>
        <button
          onClick={() => setNum(0)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          0
        </button>
        <button
          onClick={() => setNum(num - 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
      </div>
    </>
  );
};
