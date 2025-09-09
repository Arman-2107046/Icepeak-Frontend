import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
// import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
const navItems = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/#about" },
  { name: "SERVICES", path: "/#services" },
  { name: "LOCATIONS", path: "/#locations" },
  { name: "CLIENTS", path: "/#clients" },
  { name: "ETHICS", path: "/#ethics" },
  { name: "MANAGEMENT", path: "/#management" },
  { name: "BLOGS", path: "/blogs" },
  { name: "CONTACT", path: "/#contact" },
];


  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-100 shadow-md opacity-90" : "bg-transparent"
      } scroll-smooth`}
    >
      <div className="px-4 mx-auto max-w-[85rem] sm:px-6 lg:px-8">
        <div className="flex items-center h-28">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <a href="/" className="text-xl font-bold text-gray-900">
              <div className="flex items-center">
                <img src="/icepeak-logo.png" alt="Company Logo" className="h-32 w-52" />
              </div>
            </a>
          </div>

          <div className="flex-grow"></div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              className="text-lg font-semibold text-gray-800 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <Menu />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="flex-shrink-0 hidden lg:flex">
            <nav className="flex space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="text-gray-900 hover:text-gray-600 transition-colors duration-200 text-base md:text-md lg:text-[1rem] whitespace-nowrap"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* <div className="mx-4">
              <LanguageSwitcher />
            </div> */}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 opacity-100 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Mobile Logo and Close */}
          <div className="flex items-center justify-between mb-6">
            <a href="/" className="text-xl font-bold text-gray-900" onClick={() => setIsOpen(false)}>
              <img src="/icepeak-logo.png" alt="Icepeak Design" className="h-[5rem] w-[8rem]" />
            </a>
            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-gray-600"
              aria-label="Close Menu"
            >
              &times;
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <ul className="flex flex-col px-6 space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  className="text-lg text-gray-800 transition-colors hover:text-green-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Footer */}
          <div className="mt-auto">
            <div className="flex mb-4 space-x-4 text-xl text-gray-600">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            </div>
            <div className="text-sm text-gray-600">
              <p>Email: mizan@icepeakbd.com</p>
              <p>Number: +880 1678 705061</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
