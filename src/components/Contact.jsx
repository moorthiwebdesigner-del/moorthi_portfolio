function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Let's Build Your Website
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Have a project in mind? Let's discuss your ideas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}
          <div className="bg-slate-50 rounded-3xl p-10 shadow-lg">

            <h3 className="text-3xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div>
                <h4 className="font-semibold text-blue-600">
                  📧 Email
                </h4>

                <p className="text-gray-600">
                  hello@moorthiwebstudio.com
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-blue-600">
                  📱 WhatsApp
                </h4>

                <p className="text-gray-600">
                  +91 XXXXX XXXXX
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-blue-600">
                  📍 Location
                </h4>

                <p className="text-gray-600">
                  Tamil Nadu, India
                </p>
              </div>

            </div>

          </div>

          {/* Right */}
          <form className="bg-slate-50 rounded-3xl p-10 shadow-lg space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <textarea
              rows="5"
              placeholder="Tell me about your project..."
              className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>

            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
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