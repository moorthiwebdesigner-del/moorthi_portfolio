import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      {/* Top Border */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600"></div>

      {/* Main Footer */}

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">

          {/* ================= Left ================= */}

          <div>

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-3xl font-black">
                M
              </div>

              <div>

                <h2 className="text-4xl font-black">
                  Moorthi
                </h2>

                <p className="text-blue-400">
                  Full Stack Web Developer
                </p>

              </div>

            </div>

            <p className="mt-8 text-gray-400 leading-8">
              I build premium websites, CRM systems,
              React applications, WordPress websites and
              Shopify stores that help businesses grow
              online.
            </p>

            {/* Social */}

            <div className="flex gap-4 mt-10">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-600 transition duration-300 flex items-center justify-center"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-600 transition duration-300 flex items-center justify-center"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-pink-600 transition duration-300 flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/919629301506"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-green-600 transition duration-300 flex items-center justify-center"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

          {/* ================= Center ================= */}

          <div className="lg:mx-auto">

            <h3 className="text-2xl font-bold mb-8">
              Quick Links
            </h3>

            <ul className="space-y-5">

              <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>

              <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>

              <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>

              <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>

              <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>

              <li><a href="#experience" className="hover:text-blue-400 transition">Experience</a></li>

              <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>

            </ul>

          </div>

          {/* ================= Right ================= */}

          <div className="lg:ml-auto">

            <h3 className="text-2xl font-bold mb-8">
              Contact
            </h3>

            <div className="space-y-6">

              <div>

                <p className="text-gray-500 text-sm">
                  Phone
                </p>

                <p className="font-semibold mt-1">
                  +91 9629301506
                </p>

              </div>

              <div>

                <p className="text-gray-500 text-sm">
                  Email
                </p>

                <p className="font-semibold mt-1 break-all">
                  moorthiwebdesigner@gmail.com
                </p>

              </div>

              <div>

                <p className="text-gray-500 text-sm">
                  Location
                </p>

                <p className="font-semibold mt-1">
                  Chennai, Tamil Nadu
                </p>

              </div>

            </div>

            <a
              href="mailto:moorthiwebdesigner@gmail.com"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-6 py-4 rounded-xl font-semibold mt-10 transition"
            >
              <FaEnvelope />
              Hire Me
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-400 text-sm text-center">

            © {new Date().getFullYear()} Moorthi.
            Made with
            <FaHeart className="inline text-red-500 mx-2" />
            using React & Tailwind CSS.

          </p>

          <a
            href="#home"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition"
          >
            <FaArrowUp />
            Back To Top
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;