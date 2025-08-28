import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa"; // optional: for icons
import { Link, useLocation } from "react-router-dom";
import { showToast } from "../ui/Alert";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  const NavigationBarItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Browse", path: "/browse" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full fixed top-0 z-50 bg-gray-900/30 backdrop-blur-xl shadow-md transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          className="text-2xl font-bold text-gray-100 flex cursor-pointer hover:scale-105 transition-transform duration-300"
          href="/"
        >
          <img
            src={Logo}
            alt="brightPicks"
            className="h-10 w-10 rounded-2xl mr-2.5"
          />
          <span className="text-gray-200">Bri</span>
          <span className="text-green-500">ght</span>
          <span className="text-blue-500">Picks</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {NavigationBarItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`relative text-gray-400 px-2 py-1 font-medium transition-colors duration-300 hover:text-gray-100
    before:content-[''] before:absolute before:left-1/2 before:translate-x-[-50%] before:bottom-0 before:h-0.5 before:bg-blue-500
    before:transition-all before:duration-400
    ${
      location.pathname === item.path
        ? "before:w-full text-white"
        : "before:w-0 hover:before:w-full"
    }
  `}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Search Bar */}
        <div className=" flex-1 mx-4 max-w-xs hidden sm:flex items-center bg-gray-800 border border-gray-600 rounded-md px-3 py-2 focus-within:ring-1 focus-within:ring-blue-500 transition-all duration-300">
          <FaSearch className="text-gray-300 mr-3 " />
          <input
            type="text"
            id="search"
            placeholder="Search channels..."
            className="w-full bg-transparent text-white focus:outline-none placeholder-gray-400 text-sm"
          />
        </div>

        {/* Icons: Dark Mode & Hamburger */}
        <div className="flex items-center gap-4 md:gap-3">
          {/* Add resource button */}
          <button
            className="hidden lg:block btn-primary shimmer-effect"
            onClick={() =>
              showToast(
                "Not Allowed",
                "info",
                "",
                "Add resource Page under construction..."
              )
            }
          >
            <span className="relative z-10">Add Resource</span>
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none md:hidden"
            aria-label="Toggle Menu"
          >
            <motion.div
              initial={false}
              animate={isOpen ? "open" : "closed"}
              className="w-6 h-6 flex flex-col justify-between items-center"
            >
              <motion.span
                className="block w-6 h-0.5 bg-white"
                variants={{
                  open: { rotate: 45, y: 8 },
                  closed: { rotate: 0, y: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-white"
                variants={{
                  open: { opacity: 0 },
                  closed: { opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-white"
                variants={{
                  open: { rotate: -45, y: -13 },
                  closed: { rotate: 0, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="md:hidden bg-gray-900/40 backdrop-blur-xl  px-4 pb-4 overflow-hidden"
          >
            <ul className="flex flex-col gap-5 pt-2 ms-10 ">
              {NavigationBarItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`block text-gray-500 font-medium transition-colors duration-300
    ${location.pathname === item.path ? "text-white" : "hover:text-white"}
  `}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
