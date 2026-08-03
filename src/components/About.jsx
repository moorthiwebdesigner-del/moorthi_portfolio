import {
  FaReact,
  FaWordpress,
  FaShopify,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";

function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container grid lg:grid-cols-2 gap-20 items-center">

        {/* Left */}

        <div>

          <span className="section-tag">
            About Me
          </span>

          <h2 className="text-5xl font-black mt-3 leading-tight">
            I Build Modern Websites That Help Businesses Grow
          </h2>

          <p className="section-desc">
            I'm Moorthi, a passionate Full Stack Web Developer specializing
            in React, WordPress, WooCommerce and Shopify.
            My focus is building fast, responsive and SEO-friendly websites
            that convert visitors into customers.
          </p>

          <div className="grid grid-cols-2 gap-5 mt-10">

            <div className="card">
              <h3 className="text-blue-600 text-4xl font-bold">
                10+
              </h3>

              <p className="mt-2 text-gray-600">
                Demo Projects
              </p>
            </div>

            <div className="card">
              <h3 className="text-blue-600 text-4xl font-bold">
                100%
              </h3>

              <p className="mt-2 text-gray-600">
                Responsive Design
              </p>
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="bg-slate-50 rounded-3xl p-10 shadow-xl">

          <h3 className="text-3xl font-bold mb-8">
            My Skills
          </h3>

          {/* React */}

          <div className="mb-8">

            <div className="flex justify-between mb-2">
              <span className="flex items-center gap-2">
                <FaReact className="text-cyan-500" />
                React
              </span>

              <span>90%</span>
            </div>

            <div className="w-full h-3 bg-gray-200 rounded-full">
              <div className="w-[90%] h-3 bg-cyan-500 rounded-full"></div>
            </div>

          </div>

          {/* WordPress */}

          <div className="mb-8">

            <div className="flex justify-between mb-2">
              <span className="flex items-center gap-2">
                <FaWordpress className="text-blue-600" />
                WordPress
              </span>

              <span>95%</span>
            </div>

            <div className="w-full h-3 bg-gray-200 rounded-full">
              <div className="w-[95%] h-3 bg-blue-600 rounded-full"></div>
            </div>

          </div>

          {/* Shopify */}

          <div className="mb-8">

            <div className="flex justify-between mb-2">
              <span className="flex items-center gap-2">
                <FaShopify className="text-green-600" />
                Shopify
              </span>

              <span>85%</span>
            </div>

            <div className="w-full h-3 bg-gray-200 rounded-full">
              <div className="w-[85%] h-3 bg-green-600 rounded-full"></div>
            </div>

          </div>

          {/* MySQL */}

          <div>

            <div className="flex justify-between mb-2">
              <span className="flex items-center gap-2">
                <SiMysql className="text-orange-500" />
                MySQL
              </span>

              <span>88%</span>
            </div>

            <div className="w-full h-3 bg-gray-200 rounded-full">
              <div className="w-[88%] h-3 bg-orange-500 rounded-full"></div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;