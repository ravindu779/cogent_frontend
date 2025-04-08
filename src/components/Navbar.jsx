import { useState, useEffect } from "react";
import { NAV_LINKS } from "../constants";
import cogent_logo_01 from "../assets/cogent_logo_01.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-[#021E40] text-white shadow-md sticky top-0 z-50 transition-all duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="https://cogentsolutions.ae/" target="_blank" rel="noopener noreferrer" className="flex items-center mx-auto">
          <img
            src={cogent_logo_01}
            alt="Cogent Logo"
            className="h-16 w-auto"
          />
        </a>

        <div className="hidden md:flex space-x-8 items-center mx-auto">
          {NAV_LINKS.map((link) =>
            link.isButton ? (
              <a
                key={link.name}
                href={link.href}
                className="px-5 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition duration-300 font-medium shadow hover:shadow-lg"
              >
                {link.name}
              </a>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className={`text-white hover:text-orange-400 transition duration-300 font-medium ${
                  link.name === "Event Overview" || link.name === "Agenda"
                    ? "mx-auto"
                    : ""
                }`}
              >
                {link.name}
              </a>
            )
          )}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#021E40] px-6 pb-4 space-y-4">
          {NAV_LINKS.map((link) =>
            link.isButton ? (
              <a
                key={link.name}
                href={link.href}
                className="block text-center px-5 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition duration-300 font-medium"
              >
                {link.name}
              </a>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="block text-center text-white hover:text-orange-400 transition duration-300 font-medium"
              >
                {link.name}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;