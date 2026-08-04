import {
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaDownload,
  FaCheckCircle,
} from "react-icons/fa";

import { SiPostgresql } from "react-icons/si";

import FadeIn from "./FadeIn";

function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white"
    >
      <div className="container mx-auto max-w-7xl px-6">

        <FadeIn>

          <div className="text-center mb-16">

            <p className="text-blue-600 font-semibold uppercase tracking-widest">
              About Me
            </p>

            <h2 className="text-5xl font-black mt-3">
              Passionate Full Stack Developer
            </h2>

          </div>

        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <FadeIn>

            <div className="flex justify-center">

              <img
                src="/profile.png"
                alt="Moorthi"
                className="rounded-3xl shadow-2xl"
              />

            </div>

          </FadeIn>

          {/* Right */}

          <FadeIn>

            <h3 className="text-4xl font-bold mb-6">
              Hi, I'm Moorthi 👋
            </h3>

            <p className="text-gray-600 leading-8">
              I'm a Full Stack Web Developer specializing in
              React, Node.js, PostgreSQL, WordPress and Shopify.
              I build modern, responsive and SEO-friendly websites
              that help businesses grow online.
            </p>

            <p className="text-gray-600 leading-8 mt-5">
              My focus is creating clean UI, scalable backend
              applications and delivering high-quality solutions
              with excellent user experience.
            </p>

            {/* Skills */}

            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="flex items-center gap-3">
                <FaReact className="text-cyan-500 text-2xl"/>
                React
              </div>

              <div className="flex items-center gap-3">
                <FaNodeJs className="text-green-500 text-2xl"/>
                Node.js
              </div>

              <div className="flex items-center gap-3">
                <SiPostgresql className="text-sky-500 text-2xl"/>
                PostgreSQL
              </div>

              <div className="flex items-center gap-3">
                <FaWordpress className="text-blue-500 text-2xl"/>
                WordPress
              </div>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 gap-6 mt-12">

              <div className="bg-slate-50 rounded-2xl p-6">

                <h2 className="text-4xl font-black text-blue-600">
                  100+
                </h2>

                <p className="text-gray-500">
                  Projects Completed
                </p>

              </div>

              <div className="bg-slate-50 rounded-2xl p-6">

                <h2 className="text-4xl font-black text-blue-600">
                  15+
                </h2>

                <p className="text-gray-500">
                  Years Experience
                </p>

              </div>

              <div className="bg-slate-50 rounded-2xl p-6">

                <h2 className="text-4xl font-black text-blue-600">
                  65+
                </h2>

                <p className="text-gray-500">
                  Happy Clients
                </p>

              </div>

              <div className="bg-slate-50 rounded-2xl p-6">

                <h2 className="text-4xl font-black text-blue-600">
                  24/7
                </h2>

                <p className="text-gray-500">
                  Support
                </p>

              </div>

            </div>

            <a
              href="/moorthi_resume.pdf" target="_blank"
              className="inline-flex items-center gap-3 mt-10 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition"
            >
              <FaDownload />

              Download Resume

            </a>

          </FadeIn>

        </div>

      </div>
    </section>
  );
}

export default About;