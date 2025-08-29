import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/" },
    { name: "SHOWROOM", path: "/" },
    { name: "CLIENTS", path: "/" },
    { name: "ETHICS", path: "/" },
    { name: "MANAGEMENT", path: "/" },
    { name: "NEWS", path: "/" },
    { name: "CONTACT", path: "/" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="px-4 mx-auto max-w-[95rem] sm:px-6 lg:px-8">
        <div className="flex items-center h-28">
          {/* Logo - positioned at far left */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-gray-900">
              <div className="flex items-center">
                <div>
                  <img src="/icepeak-logo.png" alt="Company Logo" className="h-32 w-52" />
                </div>
              </div>
            </Link>
          </div>

          {/* Spacer to push nav items to the right */}
          <div className="flex-grow"></div>

          {/* Mobile Menu Button - only visible on small screens */}
          <div className="lg:hidden">
            <button
              className="text-lg font-semibold text-gray-800 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              
              <Menu/>
            </button>
          </div>

          {/* Desktop Navigation Links - positioned at far right on lg screens */}
          <div className="flex-shrink-0 hidden lg:flex">
            <nav className="flex space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-gray-700 hover:text-gray-800 transition-colors duration-200 text-base md:text-md lg:text-lg whitespace-nowrap ${
                    location.pathname === item.path ? "text-gray-800" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - appears when menu button is clicked */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Mobile Logo and Close Button */}
          <div className="flex items-center justify-between mb-6">
            <Link
              to="/"
              className="text-xl font-bold text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              <img src="/logo.webp" alt="Icepeak Design" className="w-12 h-12" />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-gray-600"
              aria-label="Close Menu"
            >
              &times;
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-lg text-gray-800 transition-colors hover:text-green-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Footer (Social Links & Contact Info) */}
          <div className="mt-auto">
            <div className="flex mb-4 space-x-4 text-xl text-gray-600">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <div className="text-sm text-gray-600">
              <p> Email</p>
              <p> Number </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;