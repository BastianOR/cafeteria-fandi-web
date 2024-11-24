import { useState } from "react";
import { NavLink } from "react-router-dom";

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
      <nav className="hidden w-0 h-0 md:flex md:w-full md:h-16 md:bg-[#f0efeb] md:items-center">
      <NavLink to="/">Desktop Navbar Top</NavLink>
      </nav>
      <nav
        className={
          "hidden transition-all duration-200 ease-linear overflow-hidden w-0 h-0 md:min-w-[300px] md:w-[90vw] md:max-w-[875px] md:flex md:bg-[#f0efeb] md:items-center fixed top-0 left-1/2 transform -translate-x-1/2 " +
          (isScrollDown && " md:h-16 z-20")
        }
      >
        <NavLink to="/">Desktop Navbar Fixed</NavLink>
      </nav>
    </>
  );
}
