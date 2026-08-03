import { FaCode } from "react-icons/fa";

function Navbar() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="container flex items-center justify-between h-20">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3"
        >
          <div className="bg-blue-600 text-white p-3 rounded-xl">
            <FaCode size={22} />
          </div>

          <div>
            <h2 className="text-2xl font-extrabold">
              Moorthi
            </h2>

            <p className="text-sm text-gray-500 -mt-1">
              Web Studio
            </p>
          </div>
        </a>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-700">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-600 transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Button */}
        <a
          href="#contact"
          className="hidden md:inline-block btn-primary"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}

export default Navbar;