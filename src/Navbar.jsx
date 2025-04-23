import { useState } from "react";
import IG from "./assets/IGlogo.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src={IG} className="h-10 w-10 sm:h-12 sm:w-12" />
          <h1 className="text-base sm:text-lg font-bold">BORN ON INSTAGRAM</h1>
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-6 text-sm md:text-base font-medium absolute md:static bg-black md:bg-transparent w-full md:w-auto left-0 top-full px-4 md:px-0 transition-all duration-300 ease-in ${menuOpen ? "flex" : "hidden md:flex"}`}>
          {["Welcome", "learn", "create", "discover", "earn", "support"].map((section) => (
            <li key={section} className="hover:text-gray-400 cursor-pointer">
              <a href={`#${section}`}>{section.charAt(0).toUpperCase() + section.slice(1)}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
