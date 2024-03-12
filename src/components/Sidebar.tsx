import React from "react";
import Image from "next/image";
import { IoBrowsersOutline, IoCalculator, IoFootball, IoLogoReact } from "react-icons/io5";
import SidebarMenuItem from "./SidebarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={25} />,
    title: "Dashboard",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={25} />,
    title: "Counter",
  },
  {
    path: "/dashboard/pokemons",
    icon: <IoFootball size={25} />,
    title: "Pokemons",
  },
];

export const Sidebar = () => {
    
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll "
    >
      <div id="logo" className="my-4 px-6 f">
        <h1 className="text-lg md:text-2xl font-bold text-white flex items-center">
          <IoLogoReact className="mr-2" />
          <span>Dash</span>
          <span className="text-blue-500">Board</span>.
        </h1>
      </div>
      <div id="profile" className="px-6 py-10">
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            {/* 
            <Image
              className="rounded-full w-8 h-8"
              src="https://s3.amazonaws.com/my-bucket/profile.png"
              alt="Picture of the username"
              width={50}
              height={50}
            />
            */}
          </span>
          <span className="text-md md:text-base font-semibold">
            Juan Carlos Isordia
          </span>
        </a>
      </div>

      <div id="nav" className="w-full px-6">
        {menuItems.map((item, index) => (
          <SidebarMenuItem
            key={index}
            path={item.path}
            icon={item.icon}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};
