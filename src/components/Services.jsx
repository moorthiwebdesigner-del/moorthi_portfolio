import {
  FaReact,
  FaWordpress,
  FaShoppingCart,
  FaTools,
  FaLaptopCode,
} from "react-icons/fa";
import { SiShopify } from "react-icons/si";

const services = [
  {
    icon: <FaLaptopCode size={38} className="text-blue-600" />,
    title: "Business Website",
    desc: "Professional responsive business websites that increase trust and generate more leads.",
  },
  {
    icon: <FaReact size={38} className="text-cyan-500" />,
    title: "React Development",
    desc: "Modern React applications with high performance, clean UI and scalable architecture.",
  },
  {
    icon: <FaWordpress size={38} className="text-blue-700" />,
    title: "WordPress",
    desc: "Custom WordPress websites with fast loading speed and easy content management.",
  },
  {
    icon: <FaShoppingCart size={38} className="text-orange-500" />,
    title: "WooCommerce",
    desc: "Complete eCommerce websites with secure checkout and product management.",
  },
  {
    icon: <SiShopify size={38} className="text-green-600" />,
    title: "Shopify Store",
    desc: "Launch a professional Shopify store designed to maximize sales and conversions.",
  },
  {
    icon: <FaTools size={38} className="text-purple-600" />,
    title: "Website Maintenance",
    desc: "Regular updates, backups, security monitoring and technical support for your website.",
  },
];

function Services() {
  return (
    <section id="services" className="section bg-slate-50">

      <div className="container">

        <div className="text-center mb-16">

          <span className="section-tag">
            Services
          </span>

          <h2 className="section-title">
            Services I Offer
          </h2>

          <p className="section-desc mx-auto">
            I build modern websites and web applications that help businesses
            establish a strong online presence and attract more customers.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border border-gray-100"
            >

              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-8">
                {service.desc}
              </p>

              <button className="mt-8 text-blue-600 font-semibold hover:translate-x-1 transition">
                Learn More →
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;