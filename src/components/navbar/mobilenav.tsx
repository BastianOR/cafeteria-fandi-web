/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function MobileNav() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className="w-full fixed top-0 right-0 
    bg-[var(--secondary)] h-14 z-20 md:w-0 md:overflow-hidden 
    md:h-0 md:opacity-0">
        <NavLink to="/">Mobile Navbar</NavLink>
    </nav>
    </>
  );
}
