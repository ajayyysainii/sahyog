import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { img } from "motion/react-client";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop Navbar - hidden on mobile (below md breakpoint) */}
      <div className="hidden md:flex justify-between mx-4 lg:mx-10 items-center my-5">
        <div>
          <ul className="flex gap-4 lg:gap-10 items-center font-semibold">
            <li className="text-2xl font-bold">
              <NavLink to="/"> Sahyog.</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus"> About Us</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/donation">Donate Now</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex pr-0 lg:pr-8">
          {(!localStorage.getItem("authToken"))
          ?
          <NavLink to="/signup">
          <div className="rounded-xl px-6 lg:px-10 py-2 font-semibold text-nowrap bg-[#CCEF86]">
            Sign Up
          </div>
        </NavLink>
          : <div><img src="https://devfolio-prod.s3.ap-south-1.amazonaws.com/assets/avatar@1x.png" alt="" /></div>}
          
        </div>
      </div>

      {/* Mobile hamburger menu - only visible on mobile */}
      <div className="md:hidden flex justify-between items-center mx-4 my-4">
        <NavLink to="/" className="text-2xl font-bold">
          Sahyog.
        </NavLink>
        <button onClick={toggleMenu} className="p-2">
          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile menu dropdown - only appears when menu is open on mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md absolute w-full z-50">
          <ul className="flex flex-col gap-4 font-semibold">
            <li>
              <NavLink to="/aboutus" onClick={toggleMenu}> About Us</NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={toggleMenu}>Projects</NavLink>
            </li>
            <li>
              <NavLink to="/donation" onClick={toggleMenu}>Donate Now</NavLink>
            </li>
            {(!localStorage.getItem("authToken"))
          ?
          <NavLink to="/signup">
          <div className="rounded-xl px-6 lg:px-10 py-2 font-semibold text-nowrap bg-[#CCEF86]">
            Sign Up
          </div>
        </NavLink>
          : <div><img src="https://devfolio-prod.s3.ap-south-1.amazonaws.com/assets/avatar@1x.png" alt="" /></div>}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;