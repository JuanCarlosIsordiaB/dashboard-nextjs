"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  decrement,
  increment,
  resetCounter,
  initCounterState,
} from "@/store/counter/counterSlice";
import React, { use, useEffect, useState } from "react";

interface Props {
  value?: number;
}

export interface CounterResponse {
  method: string;
  count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch("/api/counter").then((res) =>
    res.json()
  );
  return data;
};

export const CartCounter = ({ value = 0 }: Props) => {
  //const [num, setNum] = useState(value);

  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  /*
  useEffect(() => {
    dispatch(initCounterState(value));
  }, [dispatch, value]);
  */
  useEffect(() => {
    getApiCounter().then(({count}) => dispatch(initCounterState(count)));
  }, [dispatch]);

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          onClick={() => dispatch(increment())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>
        <button
          onClick={() => dispatch(resetCounter(1))}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          0
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
      </div>
    </>
  );
};
