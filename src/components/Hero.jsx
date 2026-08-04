import {
  FaArrowRight,
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaShopify,
} from "react-icons/fa";

import { SiPostgresql } from "react-icons/si";
import FadeIn from "./FadeIn";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden pt-28 pb-20"
    >
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

        <FadeIn>

          <span className="inline-flex items-center bg-blue-600/20 border border-blue-500/40 text-blue-300 px-5 py-2 rounded-full font-semibold">
            🚀 Available for Freelance
          </span>

          <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white">

            Hello,

            <br />

            I'm

            <span className="text-blue-400">
              {" "}Moorthi A
            </span>

          </h1>

          <h2 className="mt-6 text-2xl md:text-3xl font-bold text-gray-300">

            Full Stack Developer

            <br />

            UI / UX Web Designer

          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-400 max-w-xl">

            I build premium websites, CRM systems,
            React applications and modern business
            websites with high performance, beautiful
            UI and responsive design.

          </p>

          <div className="flex flex-wrap gap-5 mt-5">

            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition text-white"
            >
              Hire Me

              <FaArrowRight />

            </a>

            <a
              href="#projects"
              className="border border-gray-500 hover:bg-white hover:text-black px-8 py-4 rounded-xl transition text-white"
            >
              View Projects
            </a>

          </div>

          {/* Tech Stack */}

          <div className="flex flex-wrap gap-3 mt-12">

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl px-5 py-3 rounded-xl text-white">

              <FaReact className="text-cyan-400 text-xl" />

              React

            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl px-5 py-3 rounded-xl text-white">

              <FaNodeJs className="text-green-500 text-xl" />

              Node.js

            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl px-5 py-3 rounded-xl text-white">

              <SiPostgresql className="text-sky-400 text-xl" />

              PostgreSQL

            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl px-5 py-3 rounded-xl text-white">

              <FaWordpress className="text-blue-500 text-xl" />

              WordPress

            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl px-5 py-3 rounded-xl text-white">

              <FaShopify className="text-green-400 text-xl" />

              Shopify

            </div>

          </div>

        </FadeIn>

                {/* RIGHT */}

        <FadeIn>

          <div className="flex flex-col items-center">

            {/* Big Hero Image */}

            <div className="relative">

              {/* Glow */}

              <div className="absolute inset-0 bg-blue-500 blur-[120px] opacity-30 rounded-full scale-110"></div>

              {/* Circle Image */}

              <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[460px] lg:h-[460px] rounded-full border-[6px] border-blue-500 overflow-hidden shadow-[0_0_60px_rgba(37,99,235,0.5)]">

                <img
                  src="/hero.png"
                  alt="Moorthi"
                  className="w-full h-full object-cover object-top"
                />

              </div>

            </div>

            {/* Floating Stats */}

            <div className="mt-12 w-full max-w-xl bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">

              <div className="grid grid-cols-4">

                <div className="py-6 text-center border-r border-white/10">

                  <h3 className="text-3xl font-bold text-blue-400">
                    100+
                  </h3>

                  <p className="text-gray-300 text-sm">
                    Projects
                  </p>

                </div>

                <div className="py-6 text-center border-r border-white/10">

                  <h3 className="text-3xl font-bold text-blue-400">
                    100%
                  </h3>

                  <p className="text-gray-300 text-sm">
                    Responsive
                  </p>

                </div>

                <div className="py-6 text-center border-r border-white/10">

                  <h3 className="text-3xl font-bold text-blue-400">
                    SEO
                  </h3>

                  <p className="text-gray-300 text-sm">
                    Optimized
                  </p>

                </div>

                <div className="py-6 text-center">

                  <h3 className="text-3xl">
                    🚀
                  </h3>

                  <p className="text-gray-300 text-sm">
                    Freelancer
                  </p>

                </div>

              </div>

            </div>

          </div>

        </FadeIn>

      </div>

    </section>
  );
}

export default Hero;