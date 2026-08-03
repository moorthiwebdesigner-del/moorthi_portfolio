const services = [
  {
    title: "Business Website",
    description:
      "Modern, responsive business websites that build trust and generate leads.",
    icon: "🌐",
  },
  {
    title: "React Development",
    description:
      "Fast, dynamic React applications with modern UI and excellent performance.",
    icon: "⚛️",
  },
  {
    title: "WordPress",
    description:
      "Professional WordPress websites with easy content management.",
    icon: "📝",
  },
  {
    title: "WooCommerce",
    description:
      "Complete online stores with secure checkout and product management.",
    icon: "🛒",
  },
  {
    title: "Shopify Store",
    description:
      "Launch your Shopify store with a clean and conversion-focused design.",
    icon: "🚀",
  },
  {
    title: "Website Maintenance",
    description:
      "Regular updates, backups, security checks, and ongoing support.",
    icon: "🛠️",
  },
];

function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Services
          </p>

          <h2 className="text-5xl font-bold mt-3 text-gray-900">
            What I Can Build
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Professional web solutions designed to help businesses grow online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-5">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Services;