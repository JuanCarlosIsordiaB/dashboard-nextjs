"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
}

const SidebarMenuItem = ({ path, icon, title }: Props) => {
  const pathName = usePathname();
  return (
    <Link
      href={path}
      className={` ${
        pathName === path ? 'bg-blue-500 ': ""
      } w-full px-2 inline-flex space-x-2 items-center  py-5  hover:bg-white/5 transition ease-linear duration-50 rounded-md`}
    >
      <div>{icon}</div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
      </div>
    </Link>
  );
};

export default SidebarMenuItem;
