import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full glass shadow-sm z-50">
      <div className="container h-20 flex items-center justify-between">
        <h1 className="text-3xl font-extrabold gradient-text">
          Moorthi Web Studio
        </h1>

        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-6 py-3 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;