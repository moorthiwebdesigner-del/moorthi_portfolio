function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 via-white to-blue-50 px-6 pt-24"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold mb-8">
          🚀 Welcome to Moorthi Web Studio
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-gray-900">
          Modern Websites
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            For Growing Businesses
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-9">
          I build premium business websites using{" "}
          <span className="font-semibold text-blue-600">React</span>,
          <span className="font-semibold text-blue-600"> WordPress</span>,
          <span className="font-semibold text-blue-600"> WooCommerce</span>,
          and
          <span className="font-semibold text-blue-600"> Shopify</span>.
          Fast, responsive and SEO-friendly websites that help businesses
          generate more customers online.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Free Consultation
          </a>

          <a
            href="#projects"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
          >
            View Portfolio
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-4xl font-bold text-blue-600">10+</h2>
            <p className="text-gray-600 mt-2">Technologies</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-4xl font-bold text-blue-600">100%</h2>
            <p className="text-gray-600 mt-2">Responsive Design</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-4xl font-bold text-blue-600">24/7</h2>
            <p className="text-gray-600 mt-2">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;