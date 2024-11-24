/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section
        className="w-full fixed top-0 right-0 bg-[var(--secondary)] 
        z-20 md:w-0 md:overflow-hidden md:h-0 md:opacity-0 
        flex flex-col items-center"
      >
        <div className="flex flex-row items-center justify-between w-full p-3 h-14">
          <NavLink to="/">
            <span className="ephesis text-4xl opacity-70">Fandi</span>
          </NavLink>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="opacity-70 w-24 flex justify-end"
          >
            <IoMenu size={40} />
          </button>
        </div>

        <nav className={
          "w-full bg-[#eeede6] overflow-hidden transition-all duration-200 ease-linear flex flex-col items-center justify-center " + 
          (isOpen ? "h-[216px]" : "h-0")
          }>
          <NavLink
            to="/carta"
            className="w-full text-center p-5 text-2xl hover:bg-[#dddbd1] transition-colors duration-75 ease-linear"
          >
            Carta
          </NavLink>
          <NavLink
            to="/instagram"
            className="w-full text-center p-5 text-2xl hover:bg-[#dddbd1] transition-colors duration-75 ease-linear"
          >
            Mapa
          </NavLink>
          <NavLink
            to="/carta"
            className="w-full text-center p-5 text-2xl hover:bg-[#dddbd1] transition-colors duration-75 ease-linear"
          >
            Instagram
          </NavLink>
        </nav>
      </section>
    </>
  );
}
