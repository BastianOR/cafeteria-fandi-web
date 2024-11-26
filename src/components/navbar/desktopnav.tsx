import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function DesktopNav() {
  const [isScrollDown, setIsScrollDown] = useState(false);

  window.onscroll = function () {
    if (window.scrollY > 84) {
      setIsScrollDown(true);
    } else {
      setIsScrollDown(false);
    }
  };

  return (
    <>
      <section className="hidden w-0 h-0 md:flex md:w-full md:h-16 
      md:bg-[#f0efeb] md:items-center">
      <DesktopNavbarContent />
      </section>
      <section
        className={
          "hidden transition-all duration-200 ease-linear overflow-hidden w-0 h-0 md:min-w-[300px] md:w-[90vw] md:max-w-[875px] md:flex md:bg-[#f0efeb] md:items-center fixed top-0 left-1/2 transform -translate-x-1/2 " +
          (isScrollDown && " md:h-16 z-20")
        }
      >
        <DesktopNavbarContent />
      </section>
    </>
  );
}

function DesktopNavbarContent () {
  return (
    <nav className="desktop-navbar-content">
      <NavLink to="/">
        <img src="/navbarlogotransparent.png" alt="" className="h-10 opacity-35" />
      </NavLink>

      <ul>
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/carta">Carta</NavLink></li>
        <li><NavLink to="/location">Ubicación</NavLink></li>
        <li><a href="https://www.instagram.com/cafeteriafandi/" target="_blank">Instagram</a></li>
      </ul>
    </nav>
  );
}
