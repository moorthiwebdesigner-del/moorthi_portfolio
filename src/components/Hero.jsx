import {
  FaArrowRight,
  FaReact,
  FaWordpress,
  FaShopify,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import FadeIn from "./FadeIn";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
        
      <div className="container grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Content */}
        <div className="max-w-xl">
  <FadeIn>

    <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold mb-6">
      🚀 Professional Web Developer
    </span>

    <h1 className="text-5xl lg:text-5xl font-black leading-tight text-gray-900">
      Grow Your Business With a
      <span className="text-blue-600">
        {" "}High-Converting Website
      </span>
    </h1>

    <p className="mt-5 text-lg leading-8 text-gray-600 max-w-xl">
      Modern websites built with React, WordPress & Shopify that help
      businesses generate more leads and sales.
    </p>

    <div className="flex flex-wrap gap-4 mt-6">
      <a
        href="#contact"
        className="btn-primary flex items-center gap-2"
      >
        Hire Me
        <FaArrowRight />
      </a>

      <a
        href="#projects"
        className="btn-outline"
      >
        View Portfolio
      </a>
    </div>

    {/* Tech Stack */}

    <div className="flex flex-wrap gap-3 mt-12">

      <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow">
        <FaReact className="text-cyan-500 text-2xl"/>
        <span>React</span>
      </div>

      <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow">
        <FaWordpress className="text-blue-600 text-2xl"/>
        <span>WordPress</span>
      </div>

      <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow">
        <FaShopify className="text-green-600 text-2xl"/>
        <span>Shopify</span>
      </div>

      <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow">
        <SiMysql className="text-orange-600 text-2xl"/>
        <span>MySQL</span>
      </div>

    </div>

  </FadeIn>
</div>

        {/* Right Side */}

        <div className="flex justify-center">

          <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-lg">

            <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-4xl mx-auto">
              💻
            </div>

            <h2 className="text-3xl font-bold text-center mt-6">
              Moorthi
            </h2>

            <p className="text-center text-gray-500 mt-2">
              Full Stack Web Developer
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="bg-slate-50 rounded-2xl p-6 text-center">
                <h3 className="text-3xl font-bold text-blue-600">
                  4+
                </h3>

                <p>Platforms</p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 text-center">
                <h3 className="text-3xl font-bold text-blue-600">
                  100%
                </h3>

                <p>Responsive</p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 text-center">
                <h3 className="text-3xl font-bold text-blue-600">
                  SEO
                </h3>

                <p>Optimized</p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 text-center">
                <h3 className="text-3xl font-bold text-blue-600">
                  24/7
                </h3>

                <p>Support</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;