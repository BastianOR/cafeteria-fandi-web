import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section
        className="mobile-navbar"
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

        <nav
          className={
            "w-full bg-[#eeede6] overflow-hidden transition-all duration-200 ease-linear flex flex-col items-center justify-center " +
            (isOpen ? "h-[288px] z-30 " : " h-0 ")
          }
        >
          <NavLink
            to="/"
            className="w-full text-center p-5 text-2xl hover:bg-[#dddbd1] transition-colors duration-75 ease-linear"
          >
            Inicio
          </NavLink>
          <NavLink
            to="/carta"
            className="w-full text-center p-5 text-2xl hover:bg-[#dddbd1] transition-colors duration-75 ease-linear"
          >
            Carta
          </NavLink>
          <NavLink
            to="/location"
            className="w-full text-center p-5 text-2xl hover:bg-[#dddbd1] transition-colors duration-75 ease-linear"
          >
            Ubicación
          </NavLink>
          <NavLink
            to="/socials"
            className="w-full text-center p-5 text-2xl hover:bg-[#dddbd1] transition-colors duration-75 ease-linear"
          >
            Instagram
          </NavLink>
        </nav>
      </section>
    </>
  );
}
