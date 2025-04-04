import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, LogOut } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsProfileOpen(false);
    navigate("/");
  };

  return (
    <>
      {/* Desktop Navbar - hidden on mobile (below md breakpoint) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 120 }}
        className="hidden md:flex justify-between mx-4 lg:mx-10 items-center my-5"
      >
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
        <div className="flex pr-0 lg:pr-8 relative">
          {!localStorage.getItem("authToken") ? (
            <NavLink to="/signup">
              <div className="rounded-xl px-6 lg:px-10 py-2 font-semibold text-nowrap bg-[#CCEF86]">
                Sign Up
              </div>
            </NavLink>
          ) : (
            <div className="relative">
              <button
                onClick={toggleProfile}
                className="rounded-full hover:ring-2 hover:ring-gray-300 transition-all"
              >
                <img
                  src="https://devfolio-prod.s3.ap-south-1.amazonaws.com/assets/avatar@1x.png"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
              </button>

              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>

      {/* Mobile hamburger menu - only visible on mobile */}
      <div className="md:hidden flex justify-between items-center mx-4 my-4">
        <NavLink to="/" className="text-2xl font-bold">
          Sahyog.
        </NavLink>
        <button onClick={toggleMenu} className="p-2">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu dropdown - only appears when menu is open on mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md absolute w-full z-50">
          <ul className="flex flex-col gap-4 font-semibold">
            <li>
              <NavLink to="/" onClick={toggleMenu}>
                {" "}
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutus" onClick={toggleMenu}>
                {" "}
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={toggleMenu}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/donation" onClick={toggleMenu}>
                Donate Now
              </NavLink>
            </li>
            {!localStorage.getItem("authToken") ? (
              <NavLink to="/signup">
                <div className="rounded-xl px-6 lg:px-10 py-2 font-semibold text-nowrap bg-[#CCEF86]">
                  Sign Up
                </div>
              </NavLink>
            ) : (
              <div className="flex items-center gap-2">
                <img
                  src="https://devfolio-prod.s3.ap-south-1.amazonaws.com/assets/avatar@1x.png"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-gray-900 flex items-center gap-2"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
