import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

import FadeIn from "./FadeIn";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xve1ir7",
        "template_r3bxmdg",
        form.current,
        "-cEqtfv-YP06hJ5vh"
      )
      .then(() => {
        alert("✅ Message Sent Successfully!");
        form.current.reset();
      })
      .catch(() => {
        alert("❌ Failed to send message.");
      });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      <div className="container">

        <FadeIn>

          <div className="text-center mb-16">

            <span className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
              Contact Me
            </span>

            <h2 className="text-5xl font-black mt-5">
             Let's Start Your Project
            </h2>

            <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-8">
              Looking for a modern website, CRM, Shopify Store or React
              application? Let's discuss your project.
            </p>

          </div>

        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}

          <FadeIn>

  <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-white h-full flex flex-col justify-between">

    <div>

      <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
        🟢 Available for Opportunities

      </span>

      <h3 className="text-4xl font-black mt-6">
        Let's Work Together
      </h3>

      <p className="text-gray-600 leading-8 mt-5">
        I help businesses create modern digital
solutions with beautiful design, powerful
functionality and better user experience.
      </p>

      <div className="space-y-7 mt-10">

        <div className="flex items-center gap-5">

          <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl">
            <FaEnvelope />
          </div>

          <div>

            <h4 className="font-bold text-lg">
              Email
            </h4>

            <p className="text-gray-600">
              moorthiwebdesigner@gmail.com
            </p>

          </div>

        </div>

        <div className="flex items-center gap-5">

          <div className="w-16 h-16 rounded-2xl bg-green-600 text-white flex items-center justify-center text-2xl">
            <FaWhatsapp />
          </div>

          <div>

            <h4 className="font-bold text-lg">
              WhatsApp
            </h4>

            <p className="text-gray-600">
              +91 9629301506
            </p>

          </div>

        </div>

        <div className="flex items-center gap-5">

          <div className="w-16 h-16 rounded-2xl bg-purple-600 text-white flex items-center justify-center text-2xl">
            <FaPhoneAlt />
          </div>

          <div>

            <h4 className="font-bold text-lg">
              Phone
            </h4>

            <p className="text-gray-600">
              +91 9629301506
            </p>

          </div>

        </div>

        <div className="flex items-center gap-5">

          <div className="w-16 h-16 rounded-2xl bg-red-500 text-white flex items-center justify-center text-2xl">
            <FaMapMarkerAlt />
          </div>

          <div>

            <h4 className="font-bold text-lg">
              Location
            </h4>

            <p className="text-gray-600">
              Chennai, Tamil Nadu, India
            </p>

          </div>

        </div>

      </div>

    </div>

    <div>

      <div className="flex gap-4 mt-10">

        <a
          href="https://wa.me/919629301506"
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-xl py-4 text-center font-semibold transition"
        >
          WhatsApp
        </a>

        <a
          href="mailto:moorthiwebdesigner@gmail.com"
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-4 text-center font-semibold transition"
        >
          Email Me
        </a>

      </div>

      <div className="mt-8 bg-blue-600 rounded-2xl p-6 text-white">

        <h4 className="text-xl font-bold">
          ⚡ Quick Response
        </h4>

        <p className="mt-3 leading-7 opacity-90">
        I usually respond quickly and
will get back to you regarding your project requirements.
        </p>

      </div>

    </div>

  </div>

</FadeIn>

          {/* RIGHT */}

          <FadeIn>

  <form
    ref={form}
    onSubmit={sendEmail}
    className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-white h-full flex flex-col"
  >

    <div>

      <h3 className="text-3xl font-bold">
        Send Me a Message
      </h3>

      <p className="text-gray-500 mt-3 mb-8 leading-7">
        Fill in your details below and I'll get back to you as soon as possible.
      </p>

      <div className="grid md:grid-cols-2 gap-5">

        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
        />

      </div>

      <input
        type="text"
        name="subject"
        required
        placeholder="Subject"
        className="w-full mt-5 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
      />

      <textarea
        rows="6"
        name="message"
        required
        placeholder="Tell me about your project..."
        className="w-full mt-5 p-4 rounded-xl border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
      ></textarea>

    </div>

    {/* Bottom Section */}

    <div className="mt-auto pt-8">

      <div className="bg-slate-100 rounded-2xl p-5 mb-6">

        <h4 className="font-bold text-lg">
          📌 Project Discussion
        </h4>

        <p className="text-gray-600 mt-2 leading-7">
          Need a React Website, WordPress Website, Shopify Store,
          CRM System or Full Stack Application?
          Let's discuss your requirements.
        </p>

      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-4 text-lg font-bold transition duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
      >
       Send Project Enquiry →
      </button>

    </div>

  </form>

</FadeIn>

        </div>

      </div>
    </section>
  );
}

export default Contact;