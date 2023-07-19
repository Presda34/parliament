"use client";

import { countries } from "country-data";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { H2 } from "./headings";
import Image from 'next/image'

type Props = {
  navItems: string[]
}

export default function MobileNav({ navItems }: Props) {
  const [collapsed, setCollapsed] = useState(true);

  if (collapsed) {
    return <button className="fixed md:hidden top-4 right-4 w-12 h-12 bg-white rounded-full shadow-lg flex justify-center items-center" onClick={() => setCollapsed(false)}>
      <AiOutlineMenu />
    </button>
  }
  return <div className="fixed md:hidden flex flex-col w-full h-full bg-white overflow-y-scoll p-4 gap-4">
    <div className="flex justify-between items-center">
      <a href="/">
        <H2>Parliament Sim</H2>
      </a>
      <div className="w-12 h-12 flex justify-center items-center rounded-full shadow-lg" onClick={() => setCollapsed(true)}>
        <AiOutlineClose />
      </div>
    </div>
    {navItems.map((navItem) => (
      <a key={navItem} href={`/${navItem}`}>
        <div className="flex">
          <div className="w-12 flex">
            <img
              src={`https://flagcdn.com/24x18/${navItem}.png`}
              alt="flag" />
          </div>
          <div>{countries[navItem.toLocaleUpperCase()].name}</div>
        </div>
      </a>
    ))}
  </div>


}