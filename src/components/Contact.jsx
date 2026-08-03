import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

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
      .catch((error) => {
        console.log(error);
        alert("❌ Failed to send message. Please try again.");
      });
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container">

        <div className="text-center mb-16">
          <span className="section-tag">
            Contact
          </span>

          <h2 className="section-title">
            Let's Build Your Next Website
          </h2>

          <p className="section-desc mx-auto">
            Have a project in mind? Send me a message and I'll get back to you
            as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}

          <div className="bg-slate-50 rounded-3xl p-10 shadow-lg">

            <h3 className="text-3xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex items-center gap-5">

                <div className="bg-blue-600 text-white p-4 rounded-xl">
                  <FaEnvelope size={22}/>
                </div>

                <div>
                  <h4 className="font-bold">
                    Email
                  </h4>

                  <p className="text-gray-600">
                    moorthiwebdesigner@gmail.com
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="bg-green-600 text-white p-4 rounded-xl">
                  <FaWhatsapp size={22}/>
                </div>

                <div>
                  <h4 className="font-bold">
                    WhatsApp
                  </h4>

                  <p className="text-gray-600">
                    +91 9629301506
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="bg-purple-600 text-white p-4 rounded-xl">
                  <FaPhoneAlt size={22}/>
                </div>

                <div>
                  <h4 className="font-bold">
                    Phone
                  </h4>

                  <p className="text-gray-600">
                    +91 9629301506
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="bg-red-600 text-white p-4 rounded-xl">
                  <FaMapMarkerAlt size={22}/>
                </div>

                <div>
                  <h4 className="font-bold">
                    Location
                  </h4>

                  <p className="text-gray-600">
                    Chennai, Tamil Nadu, India
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-slate-50 rounded-3xl p-10 shadow-lg"
          >

            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full mt-5 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Tell me about your project..."
              required
              className="w-full mt-5 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>

            <button
              type="submit"
              className="btn-primary w-full mt-6"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;