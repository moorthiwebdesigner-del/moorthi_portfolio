function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            About Me
          </span>

          <h2 className="text-5xl font-bold mt-4 text-gray-900">
            Helping Businesses Build Their Online Presence
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            Hi, I'm <strong>Moorthi</strong>, a Web Developer and
            WordPress Expert from India.
            I create modern, responsive and high-performance websites
            using React, WordPress, WooCommerce and Shopify.
          </p>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            My goal is to build websites that not only look beautiful,
            but also help businesses generate more leads and customers.
          </p>

          <div className="mt-10 flex gap-5">
            <a
              href="#contact"
              className="btn-primary"
            >
              Hire Me
            </a>

            <a
              href="#projects"
              className="btn-secondary"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="grid grid-cols-2 gap-5">

          <div className="card text-center">
            <h3 className="text-4xl mb-3">💻</h3>
            <h4 className="font-bold text-xl">
              React
            </h4>
          </div>

          <div className="card text-center">
            <h3 className="text-4xl mb-3">🌐</h3>
            <h4 className="font-bold text-xl">
              WordPress
            </h4>
          </div>

          <div className="card text-center">
            <h3 className="text-4xl mb-3">🛒</h3>
            <h4 className="font-bold text-xl">
              WooCommerce
            </h4>
          </div>

          <div className="card text-center">
            <h3 className="text-4xl mb-3">🚀</h3>
            <h4 className="font-bold text-xl">
              Shopify
            </h4>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;