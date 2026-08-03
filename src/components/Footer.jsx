import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">

      <div className="container py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-extrabold">
              Moorthi
              <span className="text-blue-500"> Web Studio</span>
            </h2>

            <p className="mt-5 text-gray-400 leading-8">
              I build modern, responsive and SEO-friendly websites using
              React, WordPress, WooCommerce and Shopify.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li><a href="#home" className="hover:text-blue-400">Home</a></li>

              <li><a href="#about" className="hover:text-blue-400">About</a></li>

              <li><a href="#services" className="hover:text-blue-400">Services</a></li>

              <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>

              <li><a href="#pricing" className="hover:text-blue-400">Pricing</a></li>

              <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-bold mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>React Development</li>

              <li>WordPress Website</li>

              <li>WooCommerce Store</li>

              <li>Shopify Store</li>

              <li>Business Website</li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-bold mb-5">
              Connect With Me
            </h3>

            <p className="text-gray-400">
              Follow me on social media.
            </p>

            <div className="flex gap-4 mt-6">

              <a
                href="https://github.com/moorthiwebdesigner-del"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-pink-600 flex items-center justify-center transition"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-green-600 flex items-center justify-center transition"
              >
                <FaWhatsapp size={20} />
              </a>

            </div>

          </div>

        </div>

        <hr className="border-slate-700 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-400 text-center">
            © {year} <strong>Moorthi Web Studio</strong>. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="bg-blue-600 hover:bg-blue-700 p-4 rounded-full transition"
          >
            <FaArrowUp />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;