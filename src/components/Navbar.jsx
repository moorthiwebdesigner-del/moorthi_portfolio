import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200 shadow-sm">

      <div className="container mx-auto flex items-center justify-between h-20 px-5">


        {/* Logo */}
        <a 
          href="#home" 
          className="flex items-center gap-3 group"
        >

          {/* M Logo */}
          <div className="
            w-12 h-12 
            rounded-xl 
            flex items-center justify-center
            text-white text-2xl font-black
            bg-gradient-to-br from-blue-600 to-indigo-600
            shadow-lg
            group-hover:rotate-6
            transition
          ">
            M
          </div>


          <div>
            <h2 className="
              text-xl 
              font-extrabold 
              text-gray-900
            ">
              Moorthi
            </h2>

            <p className="
              text-[10px]
              uppercase
              tracking-[3px]
              text-blue-600
              font-semibold
            ">
              Portfolio
            </p>

          </div>

        </a>



        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-7">

          {links.map((link)=>(
            <a
              key={link.name}
              href={link.href}
              className="
              text-gray-700
              font-medium
              text-sm
              hover:text-blue-600
              transition
              relative
              group
              "
            >

              {link.name}


              <span
              className="
              absolute
              left-0
              -bottom-2
              h-[2px]
              w-0
              bg-blue-600
              group-hover:w-full
              transition-all
              "
              />

            </a>
          ))}

        </nav>



        {/* CTA Button */}
        <a
          href="#contact"
          className="
          hidden md:flex
          px-6 py-3
          rounded-xl
          bg-gradient-to-r
          from-blue-600
          to-indigo-600
          text-white
          font-semibold
          shadow-lg
          hover:scale-105
          transition
          "
        >
          Let's Talk
        </a>




        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={()=>setMenuOpen(!menuOpen)}
        >
          {
            menuOpen 
            ? <FaTimes/>
            : <FaBars/>
          }
        </button>


      </div>



      {/* Mobile Menu */}
      <div
      className={`
      md:hidden
      overflow-hidden
      transition-all
      duration-300
      ${menuOpen ? "max-h-[500px]" : "max-h-0"}
      `}
      >

        <nav className="bg-white border-t">


          {
            links.map((link)=>(
              <a
              key={link.name}
              href={link.href}
              onClick={()=>setMenuOpen(false)}
              className="
              block
              px-6
              py-4
              border-b
              text-gray-700
              hover:bg-blue-50
              hover:text-blue-600
              "
              >
                {link.name}
              </a>
            ))
          }


          <a
          href="#contact"
          className="
          block
          m-4
          py-3
          rounded-xl
          text-center
          bg-blue-600
          text-white
          font-semibold
          "
          >
            Let's Talk
          </a>


        </nav>

      </div>


    </header>
  );
}

export default Navbar;