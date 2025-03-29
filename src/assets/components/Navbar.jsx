import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between mx-10 items-center mt-5">
      <div>
        <ul className="flex gap-5 items-center">
          <li>
            <NavLink to="/"> Sahyog.</NavLink>
          </li>
          <li>
            <NavLink to="/aboutus"> About Us</NavLink>
          </li>

          <li>
            <NavLink to="/faq"> FAQs</NavLink>
          </li>
          <li>
            <NavLink to="/donation">Donate Now</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex">
        <div className="rounded-2xl px-3 py-1 text-nowrap">
        <NavLink to="/login">Login</NavLink>
        </div>
        <div className="rounded-2xl px-3 py-1 text-nowrap">
        <NavLink to="/signup">Sign Up</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
