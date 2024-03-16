"use client";
import React from "react";
import { SimpleWidget } from ".";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {
  const isCart = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        title="Contador"
        label={isCart}
        subtitle="Productos Agregados"
        href="/dashboard/counter"
      />
    </div>
  );
};
