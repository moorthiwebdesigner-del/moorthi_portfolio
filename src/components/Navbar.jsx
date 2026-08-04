import { useState } from "react";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-white/20 shadow-md">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-2xl shadow-lg group-hover:scale-110 transition duration-300">
            <FaCode size={20} />
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Moorthi
            </h2>
            <p className="text-xs text-gray-500 tracking-widest uppercase">
              Web Studio
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-gray-700 font-medium hover:text-blue-600 transition group"
            >
              {link.name}

              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Hire Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white font-semibold shadow-lg hover:scale-105 transition"
        >
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="bg-white border-t flex flex-col">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-6 py-4 border-b hover:bg-gray-50"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="m-4 rounded-xl bg-blue-600 text-white text-center py-3 font-semibold"
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;