function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400">
              Moorthi Web Studio
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              Professional websites built with React, WordPress,
              WooCommerce and Shopify.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <a href="#home" className="hover:text-blue-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-blue-400">
                  About
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-blue-400">
                  Services
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-blue-400">
                  Projects
                </a>
              </li>

              <li>
                <a href="#pricing" className="hover:text-blue-400">
                  Pricing
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <p className="text-gray-400">
              📧 hello@moorthiwebstudio.com
            </p>

            <p className="text-gray-400 mt-3">
              📱 +91 XXXXX XXXXX
            </p>

            <p className="text-gray-400 mt-3">
              📍 Tamil Nadu, India
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/moorthiwebdesigner-del"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800 hover:bg-blue-600 px-4 py-2 rounded-lg transition"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800 hover:bg-blue-600 px-4 py-2 rounded-lg transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

        </div>

        <hr className="border-gray-700 my-10" />

        <div className="text-center text-gray-500">
          © {year} Moorthi Web Studio. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;